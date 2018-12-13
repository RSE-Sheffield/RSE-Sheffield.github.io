#!/bin/bash
# Request 4 gigabytes of real memory (mem)
# and 4 gigabytes of virtual memory (mem)
#$ -l mem=4G -l rmem=4G

#Make Maple 2015 available
module load apps/binapps/maple/2015

#Run Maple with the input file, series_example.mpl
maple < series_example_fixedplot.mpl
