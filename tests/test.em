//There is a bug where T(A)*A does not produce correct value

A = [6 0 1.
    0 6 0.];
t = [6 0.
    0 6.
    1 0.];
    
>T(A)*A = {t*Aasdf(asdf*4)}
>eig(ans) = {eig(t*A)}
>svd(A) = {svd(A)}