use strict;

use Path::Class;
use Template;
use Getopt::Long;
use FindBin;

my $dir			  = dir("$FindBin::Bin", '..', 't', 'localLib');

GetOptions(
    'directory|d=s'           => \$dir,
);

my $class_template = <<TEMPLATE
var declared = false
try {
	declared = typeof [% class_name %] == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of [% class_name %]"


Class('[% class_name %]', {
	version : 0.1,
	
	use : [ 
	   [%- FOREACH dep IN class_dependencies %]
	       '[% dep %]'[% UNLESS loop.last; %],[% END %]
	   [%- END %]
	],
	
	methods : {
		result : function () { return [% class_number %] }
	},
	
	body : function(){
       [%- FOREACH dep IN class_dependencies %]
			if (typeof [% dep %] != 'function') throw "Dependency [% dep %] is not satisfied for class [% class_name %]" 
       [%- END %]
	}
})
TEMPLATE
;

my $tt = Template->new();


my $class_number = 100;
my $class_name_prefix = 'StressTest.Test';

srand(8);

for (my $i = 1; $i <= $class_number; $i++) {
	my @deps = ();
	
	for (my $j = $i + 1; $j <= $class_number; $j++) {
		#averagely 10 dependencies 
		if (rand() < 10/($class_number - $i)) {
			push @deps, get_class_name($class_name_prefix, $j)
		}
	}
	
	my $res = '';
	my $class_name = get_class_name($class_name_prefix, $i);
	$tt->process(
	    \$class_template,
	    {
	        class_name => $class_name,
	        class_number => $i,
	        class_dependencies => \@deps
	    },
	    \$res
	) || die $tt->error(), "\n";
	
	my @filename = ( $dir, 'root' . (1 + int(rand(2)) ), split(m!\.!, $class_name) );
	$filename[-1] .= '.js';
	
	file(@filename)->dir->mkpath();
	
	my $fh = file(@filename)->openw();
	print $fh $res;
	$fh->close();
}




sub get_class_name {
	my ($prefix, $num) = @_;
	
	return $prefix . sprintf("%03d", $num);
}