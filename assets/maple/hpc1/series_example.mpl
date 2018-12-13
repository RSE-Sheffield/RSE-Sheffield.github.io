myseries := series(sin(x), x = 0, 10);
poly := convert(myseries, polynom);
plot(poly, x = -2*Pi .. 2*Pi, y = -3 .. 3);
