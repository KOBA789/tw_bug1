*** old.js	2012-03-13 02:28:01.000000000 +0900
--- new.js	2012-03-13 02:28:45.000000000 +0900
***************
*** 6599,6605 ****
                      Q = Q.call(R)
                  }
                  Q = I(Q);
!                 if (this.c && ~Q.indexOf("{\u007B")) {
                      return this.c.compile(Q, this.options).render(R, T)
                  }
                  return Q
--- 6599,6605 ----
                      Q = Q.call(R)
                  }
                  Q = I(Q);
!                 if (this.c && !Q.indexOf("{\u007B")) {
                      return this.c.compile(Q, this.options).render(R, T)
                  }
                  return Q
