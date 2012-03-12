*** old.js	2012-03-13 02:28:01.000000000 +0900
--- fixed.js	2012-03-13 04:50:40.000000000 +0900
***************
*** 6442,7049 ****
          A(JSON)
      })
  });
! provide("$lib/hogan.js", function (B) {
!     var A = {};
!     var D = false;
!     if (typeof window !== "undefined") {
!         D = (window.$.browser.msie && (parseInt(window.$.browser.version, 10) <= 7))
!     }(function (N, L) {
!         N.Template = function (S, T, R, Q) {
!             this.r = S || this.r;
!             this.c = R;
!             this.options = Q;
!             this.text = T || "";
!             this.buf = (L) ? [] : ""
!         };
!         N.Template.prototype = {
!             r: function (S, R, Q) {
!                 return ""
              },
!             v: G,
!             t: I,
!             render: function F(S, R, Q) {
!                 return this.ri([S], R || {}, Q)
!             },
!             ri: function (S, R, Q) {
!                 return this.r(S, R, Q)
!             },
!             rp: function (S, U, T, Q) {
!                 var R = T[S];
!                 if (!R) {
!                     return ""
                  }
!                 if (this.c && typeof R == "string") {
!                     R = this.c.compile(R, this.options)
                  }
!                 return R.ri(U, T, Q)
!             },
!             rs: function (T, S, U) {
!                 var Q = T[T.length - 1];
!                 if (!K(Q)) {
!                     U(T, S, this);
!                     return
                  }
!                 for (var R = 0; R < Q.length; R++) {
!                     T.push(Q[R]);
!                     U(T, S, this);
!                     T.pop()
                  }
!             },
!             s: function (W, R, U, S, X, Q, T) {
!                 var V;
!                 if (K(W) && W.length === 0) {
!                     return false
!                 }
!                 if (typeof W == "function") {
!                     W = this.ls(W, R, U, S, X, Q, T)
!                 }
!                 V = (W === "") || !! W;
!                 if (!S && V && R) {
!                     R.push((typeof W == "object") ? W : R[R.length - 1])
                  }
-                 return V
              },
!             d: function (U, R, T, V) {
!                 var W = U.split("."),
!                     X = this.f(W[0], R, T, V),
!                     Q = null;
!                 if (U === "." && K(R[R.length - 2])) {
!                     return R[R.length - 1]
                  }
!                 for (var S = 1; S < W.length; S++) {
!                     if (X && typeof X == "object" && W[S] in X) {
!                         Q = X;
!                         X = X[W[S]]
!                     } else {
!                         X = ""
                      }
                  }
!                 if (V && !X) {
!                     return false
                  }
!                 if (!V && typeof X == "function") {
!                     R.push(Q);
!                     X = this.lv(X, R, T);
!                     R.pop()
!                 }
!                 return X
!             },
!             f: function (U, Q, T, V) {
!                 var X = false,
!                     R = null,
!                     W = false;
!                 for (var S = Q.length - 1; S >= 0; S--) {
!                     R = Q[S];
!                     if (R && typeof R == "object" && U in R) {
!                         X = R[U];
!                         W = true;
!                         break
                      }
                  }
!                 if (!W) {
!                     return (V) ? false : ""
!                 }
!                 if (!V && typeof X == "function") {
!                     X = this.lv(X, Q, T)
                  }
!                 return X
              },
!             ho: function (X, Q, U, W, S) {
!                 var V = this.c;
!                 var R = this.options;
!                 R.delimiters = S;
!                 var T = X.call(Q, W, function (Y) {
!                     return V.compile(Y, R).render(Q, U)
                  });
!                 this.b(V.compile(T.toString(), R).render(Q, U));
!                 return false
!             },
!             b: (L) ?
!             function (Q) {
!                 this.buf.push(Q)
!             } : function (Q) {
!                 this.buf += Q
!             },
!             fl: (L) ?
!             function () {
!                 var Q = this.buf.join("");
!                 this.buf = [];
!                 return Q
!             } : function () {
!                 var Q = this.buf;
!                 this.buf = "";
!                 return Q
!             },
!             ls: function (R, X, V, S, Q, T, Y) {
!                 var U = X[X.length - 1],
!                     W = null;
!                 if (!S && this.c && R.length > 0) {
!                     return this.ho(R, U, V, this.text.substring(Q, T), Y)
!                 }
!                 W = R.call(U);
!                 if (typeof W == "function") {
!                     if (S) {
!                         return true
                      } else {
!                         if (this.c) {
!                             return this.ho(W, U, V, this.text.substring(Q, T), Y)
                          }
                      }
!                 }
!                 return W
!             },
!             lv: function (U, S, T) {
!                 var R = S[S.length - 1];
!                 var Q = U.call(R);
!                 if (typeof Q == "function") {
!                     Q = Q.call(R)
!                 }
!                 Q = I(Q);
!                 if (this.c && ~Q.indexOf("{\u007B")) {
!                     return this.c.compile(Q, this.options).render(R, T)
!                 }
!                 return Q
!             }
!         };
!         var M = /&/g,
!             H = /</g,
!             E = />/g,
!             P = /\'/g,
!             O = /\"/g,
!             J = /[&<>\"\']/;
! 
!         function I(Q) {
!             return String((Q === null || Q === undefined) ? "" : Q)
!         }
!         function G(Q) {
!             Q = I(Q);
!             return J.test(Q) ? Q.replace(M, "&amp;").replace(H, "&lt;").replace(E, "&gt;").replace(P, "&#39;").replace(O, "&quot;") : Q
!         }
!         var K = Array.isArray ||
!         function (Q) {
!             return Object.prototype.toString.call(Q) === "[object Array]"
!         }
!     })(A, D);
!     (function (O) {
!         var R = /\S/,
!             Q = /\"/g,
!             M = /\n/g,
!             K = /\r/g,
!             E = /\\/g;
!         O.tags = {
!             "#": 1,
!             "^": 2,
!             "/": 3,
!             "!": 4,
!             ">": 5,
!             "<": 6,
!             "=": 7,
!             _v: 8,
!             "{": 9,
!             "&": 10,
!             _t: 11
!         };
!         O.scan = function U(e, Z) {
!             var o = e.length,
!                 W = 0,
!                 b = 1,
!                 V = 2,
!                 X = W,
!                 a = null,
!                 q = null,
!                 p = "",
!                 j = [],
!                 d = false,
!                 n = 0,
!                 k = 0,
!                 f = "{{",
!                 m = "}}";
! 
!             function l() {
!                 if (p.length > 0) {
!                     j.push({
!                         tag: "_t",
!                         text: new String(p)
!                     });
!                     p = ""
!                 }
!             }
!             function Y() {
!                 var s = true;
!                 for (var r = k; r < j.length; r++) {
!                     s = (O.tags[j[r].tag] < O.tags._v) || (j[r].tag == "_t" && j[r].text.match(R) === null);
!                     if (!s) {
!                         return false
!                     }
!                 }
!                 return s
!             }
!             function g(u, r) {
!                 l();
!                 if (u && Y()) {
!                     for (var s = k, t; s < j.length; s++) {
!                         if (j[s].text) {
!                             if ((t = j[s + 1]) && t.tag == ">") {
!                                 t.indent = j[s].text.toString()
!                             }
!                             j.splice(s, 1)
                          }
                      }
!                 } else {
!                     if (!r) {
!                         j.push({
!                             tag: "\n"
!                         })
!                     }
                  }
!                 d = false;
!                 k = j.length
!             }
!             function c(v, s) {
!                 var u = "=" + m,
!                     r = v.indexOf(u, s),
!                     t = G(v.substring(v.indexOf("=", s) + 1, r)).split(" ");
!                 f = t[0];
!                 m = t[1];
!                 return r + u.length - 1
!             }
!             if (Z) {
!                 Z = Z.split(" ");
!                 f = Z[0];
!                 m = Z[1]
!             }
!             for (n = 0; n < o; n++) {
!                 if (X == W) {
!                     if (J(f, e, n)) {
!                         --n;
!                         l();
!                         X = b
!                     } else {
!                         if (e.charAt(n) == "\n") {
!                             g(d)
!                         } else {
!                             p += e.charAt(n)
!                         }
!                     }
!                 } else {
!                     if (X == b) {
!                         n += f.length - 1;
!                         q = O.tags[e.charAt(n + 1)];
!                         a = q ? e.charAt(n + 1) : "_v";
!                         if (a == "=") {
!                             n = c(e, n);
!                             X = W
                          } else {
!                             if (q) {
!                                 n++
!                             }
!                             X = V
                          }
-                         d = n
                      } else {
!                         if (J(m, e, n)) {
!                             j.push({
!                                 tag: a,
!                                 n: G(p),
!                                 otag: f,
!                                 ctag: m,
!                                 i: (a == "/") ? d - m.length : n + f.length
!                             });
!                             p = "";
!                             n += m.length - 1;
!                             X = W;
!                             if (a == "{") {
!                                 if (m == "}}") {
!                                     n++
                                  } else {
!                                     P(j[j.length - 1])
                                  }
                              }
-                         } else {
-                             p += e.charAt(n)
                          }
                      }
!                 }
!             }
!             g(d, true);
!             return j
!         };
! 
!         function P(V) {
!             if (V.n.substr(V.n.length - 1) === "}") {
!                 V.n = V.n.substring(0, V.n.length - 1)
!             }
!         }
!         function G(V) {
!             if (V.trim) {
!                 return V.trim()
!             }
!             return V.replace(/^\s*|\s*$/g, "")
!         }
!         function J(V, Z, X) {
!             if (Z.charAt(X) != V.charAt(0)) {
!                 return false
!             }
!             for (var Y = 1, W = V.length; Y < W; Y++) {
!                 if (Z.charAt(X + Y) != V.charAt(Y)) {
!                     return false
!                 }
!             }
!             return true
!         }
!         function F(b, Y, W, a) {
!             var V = [],
!                 Z = null,
!                 X = null;
!             while (b.length > 0) {
!                 X = b.shift();
!                 if (X.tag == "#" || X.tag == "^" || I(X, a)) {
!                     W.push(X);
!                     X.nodes = F(b, X.tag, W, a);
!                     V.push(X)
!                 } else {
!                     if (X.tag == "/") {
!                         if (W.length === 0) {
!                             throw new Error("Closing tag without opener: /" + X.n)
!                         }
!                         Z = W.pop();
!                         if (X.n != Z.n && !L(X.n, Z.n, a)) {
!                             throw new Error("Nesting error: " + Z.n + " vs. " + X.n)
!                         }
!                         Z.end = X.i;
!                         return V
!                     } else {
!                         if (X.tag == "\n") {
!                             X.last = (b.length == 0) || (b[0].tag == "\n");
!                             V.push(X)
!                         } else {
!                             V.push(X)
                          }
                      }
                  }
!             }
!             if (W.length > 0) {
!                 throw new Error("missing closing tag: " + W.pop().n)
!             }
!             return V
!         }
!         function I(Y, W) {
!             for (var X = 0, V = W.length; X < V; X++) {
!                 if (W[X].o == Y.n) {
!                     Y.tag = "#";
!                     return true
!                 }
!             }
!         }
!         function L(Z, X, W) {
!             for (var Y = 0, V = W.length; Y < V; Y++) {
!                 if (W[Y].c == Z && W[Y].o == X) {
!                     return true
                  }
!             }
!         }
!         O.generate = function (V, Y, W) {
!             var X = 'var t=this;t.b(i=i||"");' + O.walk(V) + "return t.fl();";
!             if (W.asString) {
!                 return "function(c,p,i){" + X + ";}"
!             }
!             return new O.Template(new Function("c", "p", "i", X), Y, O, W)
!         };
! 
!         function N(V) {
!             return V.replace(E, "\\\\").replace(Q, '\\"').replace(M, "\\n").replace(K, "\\r")
!         }
!         function H(V) {
!             return (~V.indexOf(".")) ? "d" : "f"
!         }
!         O.codegen = {
!             "#": function (V) {
!                 return "if(t.s(t." + H(V.n) + '("' + N(V.n) + '",c,p,1),c,p,0,' + V.i + "," + V.end + ',"' + V.otag + " " + V.ctag + '")){t.rs(c,p,function(c,p,t){' + O.walk(V.nodes) + "});c.pop();}"
!             },
!             "^": function (V) {
!                 return "if(!t.s(t." + H(V.n) + '("' + N(V.n) + '",c,p,1),c,p,1,0,0,"")){' + O.walk(V.nodes) + "};"
!             },
!             ">": function (V) {
!                 return 't.b(t.rp("' + N(V.n) + '",c,p,"' + (V.indent || "") + '"));'
!             },
!             "<": function () {},
!             "\n": function (V) {
!                 return S('"\\n"' + (V.last ? "" : " + i"))
!             },
!             _v: function (V) {
!                 return "t.b(t.v(t." + H(V.n) + '("' + N(V.n) + '",c,p,0)));'
!             },
!             _t: function (V) {
!                 return S('"' + N(V.text) + '"')
!             },
!             "{": T,
!             "&": T,
!             raw: function (V) {
!                 return S(V.text)
!             }
!         };
! 
!         function T(V) {
!             return "t.b(t.t(t." + H(V.n) + '("' + N(V.n) + '",c,p,0)));'
!         }
!         function S(V) {
!             return "t.b(" + V + ");"
!         }
!         O.walk = function (Y) {
!             var X = "";
!             for (var W = 0, V = Y.length; W < V; W++) {
!                 var Z = O.codegen[Y[W].tag];
!                 if (Z) {
!                     X += Z(Y[W])
!                 }
!             }
!             return X
!         };
!         O.parse = function (W, X, V) {
!             V = V || {};
!             return F(W, "", [], V.sectionTags || [])
!         }, O.cache = {};
!         O.compile = function (Y, V) {
!             V = V || {};
!             var X = Y + "||" + !! V.asString;
!             var W = this.cache[X];
!             if (W) {
!                 return W
!             }
!             W = this.generate(this.parse(this.scan(Y, V.delimiters), Y, V), Y, V);
!             return this.cache[X] = W
!         }
!     })(A);
!     var C = (function (I) {
!         function H(R, T, S, P) {
!             var Q = this.f(R, T, S, 0);
!             var O = T;
!             if (Q) {
!                 O = O.concat(Q)
!             }
!             return I.Template.prototype.rp.call(this, R, O, S, P)
!         }
!         function J(R, O, Q, S) {
!             var P = O[O.length - 1];
!             var T = I.Template.prototype.f.call(this, R, O, Q, S);
!             if (T === false) {
!                 var U = P.lookup_missing_property ? P : O[0];
!                 if (U.lookup_missing_property) {
!                     T = U.lookup_missing_property(R, P);
!                     if (!S && typeof T == "function") {
!                         T = this.lv(T, O, Q)
!                     }
                  }
!             }
!             return T
!         }
!         var K = function (Q, R, P, O) {
!                 this.rp = H;
!                 this.f = J;
!                 I.Template.call(this, Q, R, P, O)
!             };
!         K.prototype = I.Template.prototype;
  
!         function M(T, U, Q) {
!             var O = I.parse.call(this, T, U, Q);
!             var P = "";
!             for (var S = 0; S < O.length; S++) {
!                 if (O[S].tag == "_v" && O[S].n.indexOf("%TRANSLATION-HINT") == 0) {
!                     var R = O.splice(S, 1)[0];
!                     S--;
!                     P = R.n.substring(R.n.indexOf("mode=") + "mode=".length)
                  }
!             }
!             return G(O, P, U, Q)
!         }
!         function G(O, Q, U, R) {
!             var P = [];
!             for (var S = 0; S < O.length; S++) {
!                 if (O[S].tag == "#" && O[S].n == "_i") {
!                     var T = N(U.substring(O[S].i, O[S].end), Q);
!                     if (T.tag == "raw") {
!                         P.push(T)
!                     } else {
!                         Array.prototype.push.apply(P, I.parse(I.scan(T, R.delimiters), U, R))
!                     }
                  } else {
!                     if (O[S].tag == "#" || O[S].tag == "^") {
!                         O[S].nodes = G(O[S].nodes, Q, U, R);
!                         P.push(O[S])
                      } else {
!                         P.push(O[S])
                      }
                  }
!             }
!             return L(P)
!         }
!         function L(O) {
!             if (O.length == 0) {
!                 return O
!             }
!             var Q = [O[0]];
!             for (var P = 1; P < O.length; P++) {
!                 if (Q[Q.length - 1].tag == "_t" && (O[P].tag == "\n" || O[P].tag == "_t")) {
!                     Q[Q.length - 1].text += O[P].text || "\n"
                  } else {
!                     Q.push(O[P])
                  }
!             }
!             return Q
!         }
!         function N(P, O) {
!             var Q = {
!                 text: P,
!                 mode: O
!             };
!             var R = _(Q);
!             if (!R) {
!                 return P
!             } else {
!                 return R
!             }
!         }
!         var F;
!         var E = function () {
!                 this.parse = M;
!                 this.generate = function (O, R, P) {
!                     var Q = 'var t=this;t.b(i=i||"");' + I.walk(O) + "return t.fl();";
!                     if (P.asString) {
!                         return "function(c,p,i){" + Q + ";}"
                      }
!                     return new K(new Function("c", "p", "i", Q), R, F, P)
                  }
!             };
!         E.prototype = I;
!         F = new E();
!         return {
!             twitterHogan: F,
!             TwitterTemplate: K,
!             to_html: function (Q, R, P, S) {
!                 if (!(Q instanceof K)) {
!                     Q = F.compile(Q, {
!                         sectionTags: [{
!                             o: "_i",
!                             c: "i"
!                         }]
!                     })
                  }
!                 var O = Q.render(R, P);
!                 if (!S) {
!                     return O
                  }
!                 S(O)
              }
!         }
!     })(A);
!     if (typeof window !== "undefined") {
!         window.Mustache = C
!     }
!     B();
!     loadrunner.Script.loaded.push("$lib/hogan.js")
  });
! provide("libwrap/hogan", function (A) {
!     using("$lib/hogan.js", function () {
          A(Mustache)
      })
  });
--- 6442,6784 ----
          A(JSON)
      })
  });
! provide("$lib/mustache.js", function (A) {
!     window.Mustache = function () {
!         var B = {};
!         var C = function () {};
!         C.prototype = {
!             otag: "{{",
!             ctag: "}}",
!             pragmas: {},
!             buffer: [],
!             pragmas_implemented: {
!                 "IMPLICIT-ITERATOR": true,
!                 "TRANSLATION-HINT": true
              },
!             context: {},
!             render: function (G, F, E, H) {
!                 if (!H) {
!                     this.context = F;
!                     this.buffer = []
                  }
!                 if (!this.includes("", G)) {
!                     if (H) {
!                         return G
!                     } else {
!                         this.send(G);
!                         return
!                     }
                  }
!                 if (this.pragmas["TRANSLATION-HINT"]) {
!                     F["_TRANSLATION-HINT_mode"] = this.pragmas["TRANSLATION-HINT"].mode
                  }
!                 G = this.render_pragmas(G);
!                 G = this.render_i18n(G, F, E);
!                 var D = this.render_section(G, F, E);
!                 if (D === false) {
!                     D = this.render_tags(G, F, E, H)
                  }
!                 if (H) {
!                     return D
!                 } else {
!                     this.sendLines(D)
                  }
              },
!             send: function (D) {
!                 if (D !== "") {
!                     this.buffer.push(D)
                  }
!             },
!             sendLines: function (F) {
!                 if (F) {
!                     var D = F.split("\n");
!                     for (var E = 0; E < D.length; E++) {
!                         this.send(D[E])
                      }
                  }
!             },
!             render_pragmas: function (D) {
!                 if (!this.includes("%", D)) {
!                     return D
                  }
!                 var F = this;
!                 var E = this.getCachedRegex("render_pragmas", function (H, G) {
!                     return new RegExp(H + "%([\\w-]+) ?([\\w]+=[\\w]+)?" + G, "g")
!                 });
!                 return D.replace(E, function (I, G, H) {
!                     if (!F.pragmas_implemented[G]) {
!                         throw ({
!                             message: "This implementation of mustache doesn't understand the '" + G + "' pragma"
!                         })
                      }
+                     F.pragmas[G] = {};
+                     if (H) {
+                         var J = H.split("=");
+                         F.pragmas[G][J[0]] = J[1]
+                     }
+                     return ""
+                 })
+             },
+             render_partial: function (E, H, G) {
+                 E = this.trim(E);
+                 var D = G;
+                 var J = E.split("/");
+                 for (var F = 0; F < J.length; F++) {
+                     var I = J[F];
+                     if (typeof H[I] == "object") {
+                         H = H[I]
+                     }
+                     D = D && D[I]
                  }
!                 if (!D) {
!                     throw ({
!                         message: "unknown_partial '" + E + "'"
!                     })
                  }
!                 return this.render(D, H, G, true)
              },
!             render_i18n: function (F, E, D) {
!                 if (F.indexOf(this.otag + "_i") == -1) {
!                     return F
!                 }
!                 var H = this;
!                 var G = this.getCachedRegex("render_i18n", function (J, I) {
!                     return new RegExp(J + "\\_i" + I + "\\s*([\\s\\S]+?)" + J + "\\/i" + I, "mg")
                  });
!                 return F.replace(G, function (J, K) {
!                     var I;
!                     if (H.pragmas && H.pragmas["TRANSLATION-HINT"] && H.pragmas["TRANSLATION-HINT"].mode) {
!                         I = H.pragmas["TRANSLATION-HINT"].mode
                      } else {
!                         if (E["_TRANSLATION-HINT_mode"]) {
!                             I = E["_TRANSLATION-HINT_mode"]
                          }
                      }
!                     var L = K;
!                     if (I) {
!                         L = {
!                             text: K,
!                             mode: I
                          }
                      }
!                     return _(L)
!                 })
!             },
!             render_section: function (F, E, D) {
!                 if (!this.includes("#", F) && !this.includes("^", F)) {
!                     return false
                  }
!                 var H = this;
!                 var G = this.getCachedRegex("render_section", function (J, I) {
!                     return new RegExp("^([\\s\\S]*?)" + J + "(\\^|\\#)\\s*(.+)\\s*" + I + "\n*([\\s\\S]*?)" + J + "\\/\\s*\\3\\s*" + I + "\\s*([\\s\\S]*)$", "g")
!                 });
!                 return F.replace(G, function (L, P, O, K, M, J) {
!                     var R = P ? H.render_tags(P, E, D, true) : "",
!                         N = J ? H.render(J, E, D, true) : "",
!                         I, Q = H.find(K, E);
!                     if (O === "^") {
!                         if (!Q || H.is_array(Q) && Q.length === 0) {
!                             I = H.render(M, E, D, true)
                          } else {
!                             I = ""
                          }
                      } else {
!                         if (O === "#") {
!                             if (H.is_array(Q)) {
!                                 I = H.map(Q, function (S) {
!                                     return H.render(M, H.create_context(S), D, true)
!                                 }).join("")
!                             } else {
!                                 if (H.is_object(Q)) {
!                                     I = H.render(M, H.create_context(Q), D, true)
                                  } else {
!                                     if (typeof Q === "function") {
!                                         I = Q.call(E, M, function (S) {
!                                             return H.render(S, E, D, true)
!                                         })
!                                     } else {
!                                         if (Q) {
!                                             I = H.render(M, E, D, true)
!                                         } else {
!                                             I = ""
!                                         }
!                                     }
                                  }
                              }
                          }
                      }
!                     return R + I + N
!                 })
!             },
!             render_tags: function (L, D, F, H) {
!                 var G = this;
!                 var K = function () {
!                         return G.getCachedRegex("render_tags", function (O, N) {
!                             return new RegExp(O + "(=|!|>|\\{|%)?([^\\/#\\^][^#\\^]*?)\\1?" + N + "+", "g")
!                         })
!                     };
!                 var I = K();
!                 var J = function (P, N, O) {
!                         switch (N) {
!                         case "!":
!                             return "";
!                         case "=":
!                             G.set_delimiters(O);
!                             I = K();
!                             return "";
!                         case ">":
!                             return G.render_partial(O, D, F);
!                         case "{":
!                             return G.find(O, D);
!                         default:
!                             return G.escape(G.find(O, D))
                          }
+                     };
+                 var M = L.split("\n");
+                 for (var E = 0; E < M.length; E++) {
+                     M[E] = M[E].replace(I, J, this);
+                     if (!H) {
+                         this.send(M[E])
                      }
                  }
!                 if (H) {
!                     return M.join("\n")
                  }
!             },
!             set_delimiters: function (E) {
!                 var D = E.split(" ");
!                 this.otag = this.escape_regex(D[0]);
!                 this.ctag = this.escape_regex(D[1])
!             },
!             escape_regex: function (E) {
!                 if (!arguments.callee.sRE) {
!                     var D = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"];
!                     arguments.callee.sRE = new RegExp("(\\" + D.join("|\\") + ")", "g")
                  }
!                 return E.replace(arguments.callee.sRE, "\\$1")
!             },
!             find: function (E, F) {
!                 E = this.trim(E);
  
!                 function D(H) {
!                     return H || H === false || H === 0
                  }
!                 var G;
!                 if (D(F[E])) {
!                     G = F[E]
                  } else {
!                     if (D(this.context[E])) {
!                         G = this.context[E]
                      } else {
!                         if (F.lookup_missing_property) {
!                             G = F.lookup_missing_property(E, F)
!                         } else {
!                             if (this.context.lookup_missing_property) {
!                                 G = this.context.lookup_missing_property(E, F)
!                             }
!                         }
                      }
                  }
!                 if (typeof G === "function") {
!                     return G.apply(F)
!                 }
!                 if (G !== undefined) {
!                     return G
!                 }
!                 return ""
!             },
!             includes: function (E, D) {
!                 return D.indexOf(this.otag + E) != -1
!             },
!             escape: function (D) {
!                 D = String(D === null ? "" : D);
!                 return D.replace(/&(?!\w+;)|["'<>\\]/g, function (E) {
!                     switch (E) {
!                     case "&":
!                         return "&amp;";
!                     case '"':
!                         return "&quot;";
!                     case "'":
!                         return "&#39;";
!                     case "<":
!                         return "&lt;";
!                     case ">":
!                         return "&gt;";
!                     default:
!                         return E
!                     }
!                 })
!             },
!             create_context: function (E) {
!                 if (this.is_object(E)) {
!                     return E
                  } else {
!                     var F = ".";
!                     if (this.pragmas["IMPLICIT-ITERATOR"]) {
!                         F = this.pragmas["IMPLICIT-ITERATOR"].iterator
!                     }
!                     var D = {};
!                     D[F] = E;
!                     return D
                  }
!             },
!             is_object: function (D) {
!                 return D && typeof D == "object"
!             },
!             is_array: function (D) {
!                 return Object.prototype.toString.call(D) === "[object Array]"
!             },
!             trim: function (D) {
!                 return D.replace(/^\s*|\s*$/g, "")
!             },
!             map: function (H, F) {
!                 if (typeof H.map == "function") {
!                     return H.map(F)
!                 } else {
!                     var G = [];
!                     var D = H.length;
!                     for (var E = 0; E < D; E++) {
!                         G.push(F(H[E]))
                      }
!                     return G
                  }
!             },
!             getCachedRegex: function (E, H) {
!                 var G = B[this.otag];
!                 if (!G) {
!                     G = B[this.otag] = {}
                  }
!                 var D = G[this.ctag];
!                 if (!D) {
!                     D = G[this.ctag] = {}
!                 }
!                 var F = D[E];
!                 if (!F) {
!                     F = D[E] = H(this.otag, this.ctag)
                  }
!                 return F
              }
!         };
!         return ({
!             name: "mustache.js",
!             version: "0.3.1-dev-twitter-c-i18n",
!             to_html: function (F, D, E, H) {
!                 var G = new C();
!                 if (H) {
!                     G.send = H
!                 }
!                 G.render(F, D || {}, E);
!                 if (!H) {
!                     return G.buffer.join("\n")
!                 }
!             }
!         })
!     }();
!     A();
!     loadrunner.Script.loaded.push("$lib/mustache.js")
  });
! provide("libwrap/mustache", function (A) {
!     using("$lib/mustache.js", function () {
          A(Mustache)
      })
  });
***************
*** 7565,9697 ****
  provide("/account/templates_t1_core.js", function (A) {
      if (!twttr.isMockview) {
          twttr.provide("twttr.templates", {
!             user_css_t1: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b("\n" + C);
!                 B.b('<style id="user-style-');
!                 B.b(B.v(B.f("style_namespace", E, D, 0)));
!                 B.b('" class="js-user-style">\n\n\n\n\n\n\n\n\n\na,\n\n\n\n.btn-link,\n\n\n\n\n  \n  \n\n.pretty-link');
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" s,\n.pretty-link");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" b,\n/* Metadata */\n.ns-experiment .story-title a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n/* Account Group */\n.metadata a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n\n.account-group");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" .fullname,\n\n.stats a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n.stats a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" strong,\n\n.profile-modal-header .fullname a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n.profile-modal-header .username a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n\n.story-article");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" .metadata,\n\n.find-friends-sources li");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" .source,\n\n\n\n\n\n.stream-item a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" .fullname,\n.stream-item .time a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n\n.stream-item .view-all-supplements");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n\n.tweet .details,\n.tweet .content-expansion a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n.tweet p a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n.tweet");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" .action-open-container a,\n\n.client-and-actions a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n\n.dismiss-promoted");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" b,\n\n.tweet .context .pretty-link");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" s,\n.tweet .context .pretty-link");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" b,\n\n.list .username a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n.list-membership-container .create-a-list,\n.list-membership-container .create-a-list");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n\n.permalink-tweet p a,\n.permalink-tweet .actions a,\n.tweet .actions li");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" b,\n.open .tweet p a,\n.open .original-tweet .action-open-container a,\n.open .original-tweet .actions b,\n\n\n\n.story-header");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" .view-tweets,\n.card .list-details a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n.card .card-body");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" .attribution,\n.new-tweets-bar,\n.onebox .soccer ul.ticker a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n.ns-experiment .story-body-link a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n\n\n\n.remove-background-btn,\n\n\n\n.stream-item-activity-me .latest-tweet .tweet-row a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(",\n\n\n\n.colored-actions.tweet .actions a,\n.colored-links.tweet p a {\n");
!                 if (B.s(B.f("profile_link_color", E, D, 1), E, D, 0, 1765, 1804, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("    color: #");
!                         F.b(F.v(F.f("profile_link_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 if (!B.s(B.f("profile_link_color", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b("    color: #0084B4;\n")
!                 }
!                 B.b("}\n\n\n\n\n\ns,\n.pretty-link");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" s,\n.stream-item-activity-me .latest-tweet .tweet-row a");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" s {\n");
!                 if (B.s(B.f("profile_pretty_link_color", E, D, 1), E, D, 0, 2044, 2090, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("    color: #");
!                         F.b(F.v(F.f("profile_pretty_link_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 if (!B.s(B.f("profile_pretty_link_color", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b("    color: #66B5D2;\n")
!                 }
!                 B.b("}\n\n\n\n\n\n.tweet .details .sm-reply,\n.tweet .details .sm-image,\n.tweet .details .sm-video,\n.tweet .details .sm-audio,\n.tweet .details .sm-geo,\n.tweet .details .sm-embed,\n.tweet .details .sm-convo,\n\n");
!                 if (B.s(B.f("has_hovers_in_css", E, D, 1), E, D, 0, 2424, 2550, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("  .with-icn:hover .action-reply,\n  .with-icn:hover .action-rt,\n  .with-icn:hover .action-fav,\n  .with-icn:hover .action-del,\n")
!                     });
!                     E.pop()
!                 }
!                 if (!B.s(B.f("has_hovers_in_css", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b("  .tweet .with-icn .action-reply,\n  .tweet .with-icn .action-rt,\n  .tweet .with-icn .action-fav,\n  .tweet .with-icn .action-del,\n")
!                 }
!                 B.b(".open .original-tweet .actions i,\n\n.permalink-tweet .actions .action-reply,\n.permalink-tweet .actions .action-rt,\n.permalink-tweet .actions .action-fav,\n.permalink-tweet .actions .action-del,\n\n.story-search-link .sm-search,\n.disco-top-tweets,\n\n\n\n.colored-actions .with-icn .action-reply,\n.colored-actions .with-icn .action-rt,\n.colored-actions .with-icn .action-fav,\n.colored-actions .with-icn .action-del {\n");
!                 if (B.s(B.f("profile_link_color", E, D, 1), E, D, 0, 3181, 3231, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("    background-color: #");
!                         F.b(F.v(F.f("profile_link_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 if (!B.s(B.f("profile_link_color", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b("    background-color: #6684B4;\n")
!                 }
!                 B.b("}\n\nbody {\n");
!                 if (B.s(B.f("profile_use_background_image", E, D, 1), E, D, 0, 3383, 3589, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("    background-position: left 40px;\n    background-attachment: fixed;\n    background-repeat: repeat;\n");
!                         if (!F.s(F.f("profile_background_tile", H, G, 1), H, G, 1, 0, 0, "")) {
!                             F.b("      background-repeat: no-repeat;\n")
!                         }
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("profile_background_color", E, D, 1), E, D, 0, 3654, 3710, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("    background-color: #");
!                         F.b(F.v(F.f("profile_background_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 if (!B.s(B.f("profile_background_color", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b("    background-color: #c0deed;\n")
!                 }
!                 B.b("}\n\n\n\n\n\n\n\n\n\n\n.anatomy .tweet p a,\n.anatomy .wrapper .content-main .tweet .actions a,\n.anatomy .tweet");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" .action-expand-container,\n.anatomy.oldstyle .wrapper .content-main .tweet");
!                 B.b(B.v(B.f("colon_hover", E, D, 0)));
!                 B.b(" .actions .action-reply-container a {\n");
!                 if (B.s(B.f("profile_link_color", E, D, 1), E, D, 0, 4101, 4140, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("    color: #");
!                         F.b(F.v(F.f("profile_link_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 if (!B.s(B.f("profile_link_color", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b("    color: #0084B4;\n")
!                 }
!                 B.b("}\n.anatomy .action-expand-container,\n.anatomy.oldstyle .wrapper .content-main .tweet .actions .action-reply-container a {\n  color: #999;\n}\n\n/* anatomy's world Tweet new styles */\n.anatomy .tweet .details .sm-reply,\n.anatomy .tweet .details .sm-image,\n.anatomy .tweet .details .sm-video,\n.anatomy .tweet .details .sm-audio,\n.anatomy .tweet .details .sm-geo,\n.anatomy .tweet .details .sm-embed,\n.anatomy .tweet .actions .action-reply,\n.anatomy .tweet .actions .action-rt,\n.anatomy .tweet .actions .action-fav,\n.anatomy .my-tweet .actions .action-del,\n.anatomy .permalink .tweet.permalink-tweet .actions i,\n.background-hover.anatomy .actions i,\n");
!                 if (B.s(B.f("has_hovers_in_css", E, D, 1), E, D, 0, 4900, 5347, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(".anatomy.oldstyle .tweet:hover .actions .action-reply,\n/* Permalink replies/inreplyto color on hover */\n.anatomy .permalink-inner .actions .with-icn:hover .action-reply,\n.anatomy .permalink-inner .actions .with-icn:hover .action-rt,\n.anatomy .permalink-inner .actions .with-icn:hover .action-fav,\n.anatomy .permalink-inner .my-tweet .actions .with-icn:hover .action-del,\n.anatomy.oldstyle .permalink-inner .actions .with-icn:hover .action-reply,\n")
!                     });
!                     E.pop()
!                 }
!                 B.b(".anatomy.oldstyle .permalink-inner .permalink-tweet .actions .with-icn .action-reply,\n.anatomy.oldstyle .open .original-tweet .actions .with-icn .action-reply,\n.random-delete-selector {\n");
!                 if (B.s(B.f("profile_link_color", E, D, 1), E, D, 0, 5581, 5631, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("    background-color: #");
!                         F.b(F.v(F.f("profile_link_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 if (!B.s(B.f("profile_link_color", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b("    background-color: #0084B4;\n")
!                 }
!                 B.b("}\n\n");
!                 if (B.s(B.f("has_hovers_in_css", E, D, 1), E, D, 0, 5763, 5917, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(".content-main .stream-item .unclickable-tweet:hover a,\n.content-main .stream-item .unclickable-tweet a:hover {\n  color: #999;\n  text-decoration: none;\n}\n")
!                     });
!                     E.pop()
!                 }
!                 if (!B.s(B.f("has_hovers_in_css", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b(".content-main .stream-item .unclickable-tweet");
!                     B.b(B.v(B.f("colon_hover", E, D, 0)));
!                     B.b(" a,\n.content-main .stream-item .unclickable-tweet a");
!                     B.b(B.v(B.f("colon_hover", E, D, 0)));
!                     B.b(" {\n  color: #999;\n  text-decoration: none;\n}\n")
!                 }
!                 B.b("\n" + C);
!                 B.b(".anatomy .permalink-inner .tweet .actions .action-reply,\n.anatomy .permalink-inner .tweet .actions .action-rt,\n.anatomy .permalink-inner .tweet .actions .action-fav,\n.anatomy .permalink-inner .my-tweet .actions .action-del,\n.anatomy.oldstyle .tweet .actions .action-reply,\n.anatomy.oldstyle .permalink-inner .actions .with-icn .action-reply {\n  background-color: #999;\n}\n\n</style>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             activity_modal: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b("<div id='activity-modal' style='display: none'>\n  <div class='left-pointer'></div>\n  <a class='dismiss' title=\"Hide\">&times;</a>\n  <p class='header'><span class='new'>New!</span> Activity and @");
!                 B.b(B.v(B.f("current_user_screen_name", E, D, 0)));
!                 B.b("</p>\n  <p class='desc'>\n      View favorites, follows, retweets and more by people you follow in <strong>Activity</strong>.\n  </p>\n  <p class='extra-blurb desc'>\n    View your mentions, tweets that were retweeted and more in <strong>@");
!                 B.b(B.v(B.f("current_user_screen_name", E, D, 0)));
!                 B.b("</strong>.\n  </p>\n</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             more_button: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="stream-item">\n  <div class="more-button-container">\n    <a class="more-button btn">more</a>\n  </div>\n</div>\n');
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_context: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b("\n");
!                 B.b("\n" + C);
!                 B.b('<div class="context">\n');
!                 if (B.s(B.f("is_sponsored", E, D, 1), E, D, 0, 43, 1365, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('    <span class="metadata with-icn js-disclosure" title="');
!                         F.b(F.v(F.f("disclosure_text", H, G, 0)));
!                         F.b('">\n');
!                         if (F.s(F.f("was_retweeted", H, G, 1), H, G, 0, 147, 443, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 if (I.s(I.f("retweeting_status", K, J, 1), K, J, 0, 178, 414, "{{ }}")) {
!                                     I.rs(K, J, function (N, M, L) {
!                                         L.b('          <i class="');
!                                         L.b(L.v(L.f("promoted_badge_class", N, M, 0)));
!                                         L.b('"></i><a href="');
!                                         if (L.s(L.f("user", N, M, 1), N, M, 0, 247, 263, "{{ }}")) {
!                                             L.rs(N, M, function (Q, P, O) {
!                                                 O.b(O.v(O.f("profile_path", Q, P, 0)))
!                                             });
!                                             N.pop()
!                                         }
!                                         L.b('" class="js-action-profile-promoted js-user-profile-link" data-user-id="');
!                                         if (L.s(L.f("user", N, M, 1), N, M, 0, 353, 359, "{{ }}")) {
!                                             L.rs(N, M, function (Q, P, O) {
!                                                 O.b(O.v(O.f("id", Q, P, 0)))
!                                             });
!                                             N.pop()
!                                         }
!                                         L.b('">Promoted by ');
!                                         L.b(L.v(L.f("advertiser_name", N, M, 0)));
!                                         L.b("</a>\n")
!                                     });
!                                     K.pop()
!                                 }
!                             });
!                             H.pop()
!                         }
!                         if (!F.s(F.f("was_retweeted", H, G, 1), H, G, 1, 0, 0, "")) {
!                             F.b('        <i class="');
!                             F.b(F.v(F.f("promoted_badge_class", H, G, 0)));
!                             F.b('"></i><a href="');
!                             if (F.s(F.f("user", H, G, 1), H, G, 0, 553, 569, "{{ }}")) {
!                                 F.rs(H, G, function (K, J, I) {
!                                     I.b(I.v(I.f("profile_path", K, J, 0)))
!                                 });
!                                 H.pop()
!                             }
!                             F.b('" class="js-action-profile-promoted js-user-profile-link" data-user-id="');
!                             if (F.s(F.f("user", H, G, 1), H, G, 0, 659, 665, "{{ }}")) {
!                                 F.rs(H, G, function (K, J, I) {
!                                     I.b(I.v(I.f("id", K, J, 0)))
!                                 });
!                                 H.pop()
!                             }
!                             F.b('">Promoted by ');
!                             F.b(F.v(F.f("advertiser_name", H, G, 0)));
!                             F.b("</a>\n")
!                         }
!                         F.b("    </span>\n");
!                         if (F.s(F.f("in_home_page", H, G, 1), H, G, 0, 770, 1345, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 if (!I.s(I.f("rendering_on_server", K, J, 1), K, J, 1, 0, 0, "")) {
!                                     I.b('        <a class="dismiss-promoted js-action-dismiss with-icn" href="#"><i class="close"></i><b>');
!                                     if (!I.s(I.f("abtest_dismiss_text_180_any_bucket", K, J, 1), K, J, 1, 0, 0, "")) {
!                                         I.b("Dismiss")
!                                     }
!                                     if (I.s(I.f("abtest_dismiss_text_180_dismiss_tweet", K, J, 1), K, J, 0, 1025, 1038, "{{ }}")) {
!                                         I.rs(K, J, function (N, M, L) {
!                                             L.b("Dismiss Tweet")
!                                         });
!                                         K.pop()
!                                     }
!                                     if (I.s(I.f("abtest_dismiss_text_180_remove_tweet", K, J, 1), K, J, 0, 1121, 1133, "{{ }}")) {
!                                         I.rs(K, J, function (N, M, L) {
!                                             L.b("Remove Tweet")
!                                         });
!                                         K.pop()
!                                     }
!                                     if (I.s(I.f("abtest_dismiss_text_180_not_interested", K, J, 1), K, J, 0, 1217, 1231, "{{ }}")) {
!                                         I.rs(K, J, function (N, M, L) {
!                                             L.b("Not interested")
!                                         });
!                                         K.pop()
!                                     }
!                                     I.b("</b></a>\n")
!                                 }
!                                 I.b("      ");
!                                 I.b(I.t(I.f("social_context", K, J, 0)));
!                                 I.b("\n" + C)
!                             });
!                             H.pop()
!                         }
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("is_top_tweet", E, D, 1), E, D, 0, 1402, 1600, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('    <span class="metadata with-icn">\n      <i class="badge-top"></i>');
!                         if (F.s(F.f("retweet_count", H, G, 1), H, G, 0, 1489, 1522, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b("Retweeted ");
!                                 I.b(I.v(I.f("retweet_count", K, J, 0)));
!                                 I.b(" times")
!                             });
!                             H.pop()
!                         }
!                         if (!F.s(F.f("retweet_count", H, G, 1), H, G, 1, 0, 0, "")) {
!                             F.b("Top Tweet")
!                         }
!                         F.b("\n" + C);
!                         F.b("    </span>\n")
!                     });
!                     E.pop()
!                 }
!                 if (!B.s(B.f("is_sponsored", E, D, 1), E, D, 1, 0, 0, "")) {
!                     if (B.s(B.f("was_retweeted", E, D, 1), E, D, 0, 1660, 2028, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             if (F.s(F.f("retweeting_status", H, G, 1), H, G, 0, 1689, 2001, "{{ }}")) {
!                                 F.rs(H, G, function (K, J, I) {
!                                     if (I.s(I.f("user", K, J, 1), K, J, 0, 1707, 1985, "{{ }}")) {
!                                         I.rs(K, J, function (N, M, L) {
!                                             L.b('          <span class="with-icn"><i class="');
!                                             if (!L.s(L.f("anatomy_world", N, M, 1), N, M, 1, 0, 0, "")) {
!                                                 L.b("sm-rt")
!                                             }
!                                             if (L.s(L.f("anatomy_world", N, M, 1), N, M, 0, 1810, 1823, "{{ }}")) {
!                                                 L.rs(N, M, function (Q, P, O) {
!                                                     O.b("badge-retweet")
!                                                 });
!                                                 N.pop()
!                                             }
!                                             L.b('"></i>Retweeted by <a class="pretty-link js-user-profile-link" href="');
!                                             L.b(L.v(L.f("profile_path", N, M, 0)));
!                                             L.b('" data-user-id="');
!                                             L.b(L.v(L.f("id", N, M, 0)));
!                                             L.b('"><b>');
!                                             L.b(L.v(L.f("name", N, M, 0)));
!                                             L.b("</b></a></span>\n")
!                                         });
!                                         K.pop()
!                                     }
!                                 });
!                                 H.pop()
!                             }
!                         });
!                         E.pop()
!                     }
!                 }
!                 B.b("</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             details_pane: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b("<div class=\"inner-pane\">\n  <div class='pane-toolbar pane-built-in'>\n");
!                 if (B.s(B.f("popable", E, D, 1), E, D, 0, 84, 180, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      <a class='pane-back toolbar-control' href='#'><span>&larr;</span> ");
!                         F.b(F.v(F.f("back_label", H, G, 0)));
!                         F.b("</a>\n")
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("closable", E, D, 1), E, D, 0, 210, 299, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      <a class='pane-close toolbar-control' href='#'>close <span>&times;</span></a>\n")
!                     });
!                     E.pop()
!                 }
!                 B.b('    <br style=\'clear: both\' />\n  </div>\n  <div class="pane-components">\n    <div class="pane-components-inner">\n    </div>\n  </div>\n</div>\n');
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             stream_activity: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b("<span class='stream-activity-line'><i></i>");
!                 B.b(B.t(B.f("sentence", E, D, 0)));
!                 B.b("</span>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             stream_manager: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="stream-manager js-stream-manager-container"');
!                 if (B.s(B.f("page_name_underscore", E, D, 1), E, D, 0, 80, 125, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(' id="');
!                         F.b(F.v(F.f("page_name_underscore", H, G, 0)));
!                         F.b('-stream-manager"')
!                     });
!                     E.pop()
!                 }
!                 B.b(">\n");
!                 if (B.s(B.f("tweets", E, D, 1), E, D, 0, 165, 711, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('    <div class="stream-title"></div>\n    <div class="stream-container">\n      <div class="stream ');
!                         if (F.s(F.f("page_name_underscore", H, G, 1), H, G, 0, 288, 319, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b(I.v(I.f("page_name_underscore", K, J, 0)));
!                                 I.b("-stream")
!                             });
!                             H.pop()
!                         }
!                         F.b('">\n        \n        <div class="js-stream-items stream-items" id="stream-items-id">');
!                         F.b(F.t(F.f("tweets", H, G, 0)));
!                         F.b("</div>\n");
!                         if (F.s(F.f("show_empty_home", H, G, 1), H, G, 0, 474, 538, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b('          <div class="component">');
!                                 I.b(I.rp("empty_home", K, J, ""));
!                                 I.b("</div>\n")
!                             });
!                             H.pop()
!                         }
!                         if (F.s(F.f("include_stream_footer", H, G, 1), H, G, 0, 593, 657, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b('          <div class="component">');
!                                 I.b(I.rp("stream_end", K, J, ""));
!                                 I.b("</div>\n")
!                             });
!                             H.pop()
!                         }
!                         F.b("\n" + C);
!                         F.b("      </div>\n    </div>\n")
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("rendering_on_server", E, D, 1), E, D, 0, 749, 898, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         if (!F.s(F.f("tweets", H, G, 1), H, G, 1, 0, 0, "")) {
!                             if (F.s(F.f("profile_page", H, G, 1), H, G, 0, 789, 862, "{{ }}")) {
!                                 F.rs(H, G, function (K, J, I) {
!                                     if (!I.s(I.f("can_view", K, J, 1), K, J, 1, 0, 0, "")) {
!                                         I.b(I.rp("stream", K, J, "          "))
!                                     }
!                                 });
!                                 H.pop()
!                             }
!                         }
!                     });
!                     E.pop()
!                 }
!                 B.b("</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             stream_tweet: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 if (!B.s(B.f("render_withheld", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b("\n" + C);
!                     if (B.s(B.f("is_current_user_withheld", E, D, 1), E, D, 0, 51, 76, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             F.b(F.rp("withheld_message", H, G, "  "))
!                         });
!                         E.pop()
!                     }
!                     B.b("\n" + C);
!                     B.b('<div class="tweet original-tweet js-stream-tweet js-actionable-tweet js-hover js-profile-popup-actionable js-original-tweet ');
!                     if (B.s(B.f("hidden_by_activity", E, D, 1), E, D, 0, 254, 277, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             F.b(" sub-stream-item-hidden")
!                         });
!                         E.pop()
!                     }
!                     if (B.s(B.f("embedded_by_activity", E, D, 1), E, D, 0, 325, 343, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             F.b(" js-activity-tweet")
!                         });
!                         E.pop()
!                     }
!                     B.b(" ");
!                     B.b(B.rp("common_tweet_classes", E, D, ""));
!                     B.b(' colored-links colored-actions" ');
!                     B.b(B.rp("tweet_data", E, D, ""));
!                     B.b('>\n  <i class="dogear"></i>\n  <div class="content">\n    <div class="stream-item-header">\n');
!                     B.b(B.rp("tweet_timestamp", E, D, "      "));
!                     if (B.s(B.f("anatomy_world", E, D, 1), E, D, 0, 580, 812, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             F.b('        <div class="js-open-close-tweet toggle-expansion">\n          <a class="expand-link" href="#">Expand</a>\n          <a class="collapse-link" href="#">Close</a>\n          <span>&nbsp;&middot;&nbsp;</span>\n        </div>\n')
!                         });
!                         E.pop()
!                     }
!                     B.b(B.rp("tweet_user_block", E, D, "      "));
!                     if (!B.s(B.f("anatomy_world", E, D, 1), E, D, 1, 0, 0, "")) {
!                         B.b(B.rp("tweet_actions", E, D, "        "))
!                     }
!                     B.b('    </div>\n    <p class="js-tweet-text">');
!                     B.b(B.t(B.f("linkified_text", E, D, 0)));
!                     B.b('</p>\n    <div class="stream-item-footer">\n');
!                     B.b(B.rp("tweet_context", E, D, "      "));
!                     B.b('      <a class="details with-icn js-details" href="#">\n        <span class="js-icon-container"');
!                     if (B.s(B.f("place_name", E, D, 1), E, D, 0, 1172, 1204, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             F.b(' data-placename="');
!                             F.b(F.v(F.f("place_name", H, G, 0)));
!                             F.b('"')
!                         });
!                         E.pop()
!                     }
!                     B.b(">\n");
!                     if (B.s(B.f("is_reply", E, D, 1), E, D, 0, 1244, 1457, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             if (!F.s(F.f("anatomy_world", H, G, 1), H, G, 1, 0, 0, "")) {
!                                 F.b('              <i class="sm-reply"></i>\n')
!                             }
!                             if (F.s(F.f("anatomy_world", H, G, 1), H, G, 0, 1376, 1428, "{{ }}")) {
!                                 F.rs(H, G, function (K, J, I) {
!                                     I.b('              <i class="sm-convo"></i>\n')
!                                 });
!                                 H.pop()
!                             }
!                         });
!                         E.pop()
!                     }
!                     B.b('        </span>\n        <b>\n          <span class="view-open js-view-details">\n');
!                     if (B.s(B.f("is_reply", E, D, 1), E, D, 0, 1575, 1803, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             if (!F.s(F.f("anatomy_world", H, G, 1), H, G, 1, 0, 0, "")) {
!                                 F.b("                In reply to ");
!                                 F.b(F.v(F.f("in_reply_to_name", H, G, 0)));
!                                 F.b("\n" + C)
!                             }
!                             if (F.s(F.f("anatomy_world", H, G, 1), H, G, 0, 1723, 1772, "{{ }}")) {
!                                 F.rs(H, G, function (K, J, I) {
!                                     I.b("                View conversation\n")
!                                 });
!                                 H.pop()
!                             }
!                         });
!                         E.pop()
!                     }
!                     if (!B.s(B.f("is_reply", E, D, 1), E, D, 1, 0, 0, "")) {
!                         if (B.s(B.f("anatomy_world", E, D, 1), E, D, 0, 1875, 1994, "{{ }}")) {
!                             B.rs(E, D, function (H, G, F) {
!                                 F.b('                <span class="action-expand-container">\n                  Expand\n                </span>\n')
!                             });
!                             E.pop()
!                         }
!                     }
!                     B.b('          </span>\n          <span class="hide-open js-hide-details">\n            ');
!                     if (B.s(B.f("is_reply", E, D, 1), E, D, 0, 2133, 2150, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             F.b("Hide conversation")
!                         });
!                         E.pop()
!                     }
!                     B.b("\n" + C);
!                     if (!B.s(B.f("is_reply", E, D, 1), E, D, 1, 0, 0, "")) {
!                         if (B.s(B.f("anatomy_world", E, D, 1), E, D, 0, 2222, 2339, "{{ }}")) {
!                             B.rs(E, D, function (H, G, F) {
!                                 F.b('                <span class="action-close-container">\n                  Close\n                </span>\n')
!                             });
!                             E.pop()
!                         }
!                     }
!                     B.b("          </span>\n        </b>\n      </a>\n");
!                     if (B.s(B.f("anatomy_world", E, D, 1), E, D, 0, 2450, 2484, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             F.b(F.rp("tweet_actions", H, G, "        "))
!                         });
!                         E.pop()
!                     }
!                     B.b("    </div>\n");
!                     B.b(B.rp("stream_tweet_expansion", E, D, "    "));
!                     B.b("  </div>\n</div>\n")
!                 }
!                 if (B.s(B.f("render_withheld", E, D, 1), E, D, 0, 2603, 2633, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(F.rp("stream_tweet_withheld", H, G, "  "))
!                     });
!                     E.pop()
!                 }
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             bg_img_css: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b("\n" + C);
!                 B.b('<style id="user-style-');
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b('-bg-img" class="js-user-style-bg-img">\n  body.user-style-');
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" {\n");
!                 if (B.s(B.f("profile_use_background_image", E, D, 1), E, D, 0, 150, 300, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         if (F.s(F.f("profile_background_image_url", H, G, 1), H, G, 0, 190, 262, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b("        background-image: url(");
!                                 I.b(I.v(I.f("profile_background_image_url", K, J, 0)));
!                                 I.b(");\n")
!                             });
!                             H.pop()
!                         }
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n</style>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             stream_loading: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="stream-loading">\n  <div class="stream-end-inner">\n    <span class="spinner" title="Loading..."></span>\n  </div>\n</div>\n');
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_dogear: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="tweet-dogear"></div>\n');
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_meta: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b("<div class='tweet-meta'>\n  <span class='icons'>\n");
!                 if (B.s(B.f("is_sponsored", E, D, 1), E, D, 0, 69, 199, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         if (F.s(F.f("retweet_count", H, G, 1), H, G, 0, 94, 176, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b("        <span class='retweet-icon'></span> <em>");
!                                 I.b(I.v(I.f("retweet_count_text", K, J, 0)));
!                                 I.b("</em>\n")
!                             });
!                             H.pop()
!                         }
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 if (!B.s(B.f("decider_activity_read", E, D, 1), E, D, 1, 0, 0, "")) {
!                     if (!B.s(B.f("is_sponsored", E, D, 1), E, D, 1, 0, 0, "")) {
!                         if (B.s(B.f("was_retweeted", E, D, 1), E, D, 0, 299, 467, "{{ }}")) {
!                             B.rs(E, D, function (H, G, F) {
!                                 if (F.s(F.f("retweeting_status", H, G, 1), H, G, 0, 332, 436, "{{ }}")) {
!                                     F.rs(H, G, function (K, J, I) {
!                                         I.b("            <span class='retweet-icon'></span> ");
!                                         if (I.s(I.f("user", K, J, 1), K, J, 0, 389, 416, "{{ }}")) {
!                                             I.rs(K, J, function (N, M, L) {
!                                                 L.b("<em>by ");
!                                                 L.b(L.v(L.f("screen_name", N, M, 0)));
!                                                 L.b("</em>")
!                                             });
!                                             K.pop()
!                                         }
!                                         I.b("\n" + C)
!                                     });
!                                     H.pop()
!                                 }
!                             });
!                             E.pop()
!                         }
!                     }
!                 }
!                 B.b("\n" + C);
!                 B.b('    <div class="extra-icons">\n');
!                 if (!B.s(B.f("can_expand", E, D, 1), E, D, 1, 0, 0, "")) {
!                     if (B.s(B.f("is_reply", E, D, 1), E, D, 0, 615, 689, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             F.b("          <span class='reply-icon icon js-reply-notice'>@</span>\n")
!                         });
!                         E.pop()
!                     }
!                     B.b('        <span class="inlinemedia-icons js-icon-container"></span>\n        ');
!                     if (B.s(B.f("show_geo_icon", E, D, 1), E, D, 0, 795, 824, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             F.b('<span class="geo-pin"></span>')
!                         });
!                         E.pop()
!                     }
!                     B.b("\n" + C)
!                 }
!                 if (B.s(B.f("can_expand", E, D, 1), E, D, 0, 886, 922, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(F.rp("tweet_timestamp", H, G, "        "))
!                     });
!                     E.pop()
!                 }
!                 B.b("    </div>\n  </span>\n</div>\n\n");
!                 if (B.s(B.f("can_expand", E, D, 1), E, D, 0, 982, 1004, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(F.rp("tweet_actions", H, G, "  "))
!                     });
!                     E.pop()
!                 }
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_text: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="tweet-text js-tweet-text">');
!                 B.b(B.t(B.f("linkified_text", E, D, 0)));
!                 B.b("</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_timestamp: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<small class="time">\n    <a href="');
!                 B.b(B.v(B.f("permalink_path", E, D, 0)));
!                 B.b('" class="tweet-timestamp js-permalink" title="');
!                 B.b(B.v(B.f("explicit_timestamp", E, D, 0)));
!                 B.b('"><span class="_timestamp js-short-timestamp ');
!                 if (B.s(B.f("is_relative_timestamp", E, D, 1), E, D, 0, 191, 212, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("js-relative-timestamp")
!                     });
!                     E.pop()
!                 }
!                 B.b('" data-time="');
!                 B.b(B.v(B.f("actual_timestamp", E, D, 0)));
!                 B.b('" data-long-form="true">');
!                 B.b(B.v(B.f("short_timestamp", E, D, 0)));
!                 B.b("</span></a>\n</small>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_user_name: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 if (B.s(B.f("user", E, D, 1), E, D, 0, 9, 403, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("<span class='tweet-user-name'>\n  <a class='tweet-screen-name user-profile-link js-action-profile-name' data-user-id='");
!                         F.b(F.v(F.f("id", H, G, 0)));
!                         F.b("' href='");
!                         F.b(F.v(F.f("profile_path", H, G, 0)));
!                         F.b("' title='");
!                         F.b(F.v(F.f("name", H, G, 0)));
!                         F.b("'>");
!                         F.b(F.v(F.f("screen_name", H, G, 0)));
!                         F.b("</a>\n  <span class='tweet-full-name'>");
!                         F.b(F.v(F.f("name", H, G, 0)));
!                         F.b("</span>\n");
!                         if (F.s(F.f("show_follow_action", H, G, 1), H, G, 0, 269, 371, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 if (!I.s(I.f("is_current_user", K, J, 1), K, J, 1, 0, 0, "")) {
!                                     I.b('    <span class="tweet-user-follow">\n    </span>\n')
!                                 }
!                             });
!                             H.pop()
!                         }
!                         F.b("</span>\n")
!                     });
!                     E.pop()
!                 }
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_user_block: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 if (B.s(B.f("user", E, D, 1), E, D, 0, 9, 489, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('  <a class="account-group js-account-group js-action-profile js-user-profile-link" href="');
!                         F.b(F.v(F.f("profile_path", H, G, 0)));
!                         F.b('" data-user-id="');
!                         F.b(F.v(F.f("id", H, G, 0)));
!                         F.b('">\n    <img class="avatar js-action-profile-avatar" src="');
!                         F.b(F.v(F.f("profile_image_url", H, G, 0)));
!                         F.b('" alt="');
!                         F.b(F.v(F.f("name", H, G, 0)));
!                         F.b('">\n    <strong class="fullname js-action-profile-name">');
!                         F.b(F.v(F.f("name", H, G, 0)));
!                         F.b('</strong>\n    <span>&rlm;</span>\n    <span class="username js-action-profile-name"><s>@</s><b>');
!                         F.b(F.v(F.f("screen_name", H, G, 0)));
!                         F.b("</b></span>\n");
!                         if (F.s(F.f("protected", H, G, 1), H, G, 0, 432, 467, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b('      <i class="sm-lock"></i>\n')
!                             });
!                             H.pop()
!                         }
!                         F.b("  </a>\n")
!                     });
!                     E.pop()
!                 }
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             details_pane_container: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div id="details-pane-outer">\n  <div class="details-pane-shell">\n    <div class="details-pane">\n      ');
!                 B.b(B.t(B.f("pane", E, D, 0)));
!                 B.b("\n" + C);
!                 B.b("    </div>\n  </div>\n</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             message_notification: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 if (B.s(B.f("message", E, D, 1), E, D, 0, 12, 435, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("<div data-sender-id='");
!                         F.b(F.v(F.f("sender_screen_name", H, G, 0)));
!                         F.b("' data-message-id=\"");
!                         F.b(F.v(F.f("id", H, G, 0)));
!                         F.b("\" class='notification'>\n  <a class='dismiss' href='#'>&times;</a>\n  <h1>New Message from ");
!                         F.b(F.t(F.f("sender_screen_name", H, G, 0)));
!                         F.b("</h1>\n  <div class='message-text'>");
!                         F.b(F.t(F.f("text", H, G, 0)));
!                         F.b('</div>\n  <div class="message-notification-reply-box">\n    <div class="message-notification-reply-editor"></div>\n    <div class="message-notification-reply-button button">Send</div>\n  </div>\n</div>\n')
!                     });
!                     E.pop()
!                 }
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_user_image_48: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 if (B.s(B.f("user", E, D, 1), E, D, 0, 9, 156, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('<img height="48" width="48" src=\'');
!                         F.b(F.v(F.f("profile_image_url", H, G, 0)));
!                         F.b("' alt='");
!                         F.b(F.v(F.f("name", H, G, 0)));
!                         F.b("' class='user-profile-link js-action-profile-avatar' data-user-id='");
!                         F.b(F.v(F.f("id", H, G, 0)));
!                         F.b("'/>\n")
!                     });
!                     E.pop()
!                 }
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_user_with_activity: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 if (B.s(B.f("user", E, D, 1), E, D, 0, 9, 284, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("  <span class='tweet-user-name'>\n    <a class='tweet-screen-name user-profile-link js-action-profile-name' data-user-id='");
!                         F.b(F.v(F.f("id", H, G, 0)));
!                         F.b("' href='");
!                         F.b(F.v(F.f("profile_path", H, G, 0)));
!                         F.b("' title='");
!                         F.b(F.v(F.f("name", H, G, 0)));
!                         F.b("'>");
!                         F.b(F.v(F.f("screen_name", H, G, 0)));
!                         F.b("</a>\n    <span class='tweet-full-name'>");
!                         F.b(F.v(F.f("connector", H, G, 0)));
!                         F.b(" ");
!                         F.b(F.t(F.f("title_object", H, G, 0)));
!                         F.b("</span>\n  </span>\n")
!                     });
!                     E.pop()
!                 }
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_data: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b("\n" + C);
!                 B.b('data-tweet-id="');
!                 B.b(B.v(B.f("id", E, D, 0)));
!                 B.b('"\n');
!                 B.b(B.t(B.f("tweet_impression_id", E, D, 0)));
!                 B.b("\n" + C);
!                 B.b('data-item-id="');
!                 B.b(B.v(B.f("id", E, D, 0)));
!                 B.b('"\n');
!                 if (B.s(B.f("current_user_retweet", E, D, 1), E, D, 0, 97, 125, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(' data-my-retweet-id="');
!                         F.b(F.v(F.f("id", H, G, 0)));
!                         F.b('"')
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 if (B.s(B.f("was_retweeted", E, D, 1), E, D, 0, 169, 238, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         if (F.s(F.f("retweeting_status", H, G, 1), H, G, 0, 191, 216, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b(' data-retweet-id="');
!                                 I.b(I.v(I.f("id", K, J, 0)));
!                                 I.b('"')
!                             });
!                             H.pop()
!                         }
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 if (B.s(B.f("user", E, D, 1), E, D, 0, 266, 323, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(' data-screen-name="');
!                         F.b(F.v(F.f("screen_name", H, G, 0)));
!                         F.b('" data-user-id="');
!                         F.b(F.v(F.f("id", H, G, 0)));
!                         F.b('"')
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 if (B.s(B.f("protected", E, D, 1), E, D, 0, 347, 369, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(' data-protected="true"')
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 if (B.s(B.f("is_sponsored", E, D, 1), E, D, 0, 401, 422, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(' data-promoted="true"')
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 if (B.s(B.f("show_geo_icon", E, D, 1), E, D, 0, 458, 474, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(' data-geo="true"')
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 B.b('data-is-reply-to="');
!                 B.b(B.v(B.f("is_reply", E, D, 0)));
!                 B.b('"\n');
!                 if (B.s(B.f("status_data", E, D, 1), E, D, 0, 541, 571, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(' data-status="');
!                         F.b(F.v(F.f("status_data", H, G, 0)));
!                         F.b('"')
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 if (B.s(B.f("rendering_on_server", E, D, 1), E, D, 0, 612, 713, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('data-expanded-footer="');
!                         if (F.s(F.f("escape_html_for_attribute", H, G, 1), H, G, 0, 664, 682, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b(I.rp("tweet_details", K, J, ""))
!                             });
!                             H.pop()
!                         }
!                         F.b('"')
!                     });
!                     E.pop()
!                 }
!                 B.b("\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_geo_text: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 if (B.s(B.f("has_geo", E, D, 1), E, D, 0, 12, 259, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         if (!F.s(F.f("show_geo_map", H, G, 1), H, G, 1, 0, 0, "")) {
!                             F.b('    <div>\n      <a class="js-tweet-geo-text tweet-geo-text" href="');
!                             F.b(F.v(F.f("place_path", H, G, 0)));
!                             F.b('">\n        ');
!                             if (F.s(F.f("place_name", H, G, 1), H, G, 0, 139, 158, "{{ }}")) {
!                                 F.rs(H, G, function (K, J, I) {
!                                     I.b("from ");
!                                     I.b(I.v(I.f("place_name", K, J, 0)))
!                                 });
!                                 H.pop()
!                             }
!                             if (!F.s(F.f("place_name", H, G, 1), H, G, 1, 0, 0, "")) {
!                                 F.b("view location")
!                             }
!                             F.b("\n" + C);
!                             F.b("      </a>\n    </div>\n")
!                         }
!                     });
!                     E.pop()
!                 }
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             stream_header: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="header-inner">\n  <h2>\n    <span class="content-header-buttons js-header-button-container"></span>\n    <span class="js-stream-title">');
!                 B.b(B.v(B.f("stream_title", E, D, 0)));
!                 B.b('</span>\n\n    <small class="view-toggler js-view-toggler"></small>\n  </h2>\n  ');
!                 if (B.s(B.f("header_help", E, D, 1), E, D, 0, 252, 309, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('<p class="js-header-help subheader">');
!                         F.b(F.t(F.f("header_help", H, G, 0)));
!                         F.b("</p>")
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 B.b("</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             message_drawer: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="message ');
!                 if (!B.s(B.f("rendering_on_server", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b(B.v(B.f("type", E, D, 0)))
!                 }
!                 B.b('">\n  <div class="message-inside">\n    <span class="message-text">');
!                 B.b(B.t(B.f("text", E, D, 0)));
!                 B.b("</span\n    >");
!                 if (B.s(B.f("close_button", E, D, 1), E, D, 0, 180, 219, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('<a class="dismiss" href="#">&times;</a>')
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 B.b("  </div>\n</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             stream: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="stream">\n  \n  <div class="js-stream-items stream-items" id="stream-items-id"></div>\n</div>\n');
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             stream_item: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="js-stream-item stream-item ');
!                 B.b(B.v(B.f("item_class", E, D, 0)));
!                 B.b('" data-item-id="');
!                 B.b(B.v(B.f("item_id", E, D, 0)));
!                 B.b('" data-item-type="');
!                 B.b(B.v(B.f("item_type", E, D, 0)));
!                 B.b('"');
!                 if (B.s(B.f("rendering_on_server", E, D, 1), E, D, 0, 136, 179, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(' id="stream-item-');
!                         F.b(F.v(F.f("item_type", H, G, 0)));
!                         F.b("-");
!                         F.b(F.v(F.f("item_id", H, G, 0)));
!                         F.b('"')
!                     });
!                     E.pop()
!                 }
!                 B.b(">\n  ");
!                 B.b(B.t(B.f("item_html", E, D, 0)));
!                 B.b("\n" + C);
!                 B.b("</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             stream_tweet_withheld: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="tweet original-tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable js-original-tweet ');
!                 if (B.s(B.f("hidden_by_activity", E, D, 1), E, D, 0, 138, 161, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(" sub-stream-item-hidden")
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("embedded_by_activity", E, D, 1), E, D, 0, 209, 227, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(" js-activity-tweet")
!                     });
!                     E.pop()
!                 }
!                 B.b(" ");
!                 B.b(B.rp("common_tweet_classes", E, D, ""));
!                 B.b('" ');
!                 B.b(B.rp("tweet_data", E, D, ""));
!                 B.b('>\n  <i class="dogear"></i>\n  <div class="content">\n    <div class="stream-item-header">\n      <a class="account-group">\n        <strong class="fullname">Tweet withheld</strong>\n      </a>\n');
!                 B.b(B.rp("tweet_timestamp", E, D, "      "));
!                 B.b('    </div>\n    <p class="js-tweet-text">');
!                 B.b(B.t(B.f("linkified_text", E, D, 0)));
!                 B.b('</p>\n    <div class="stream-item-footer">\n');
!                 B.b(B.rp("tweet_context", E, D, "      "));
!                 B.b("    </div>\n");
!                 B.b(B.rp("stream_tweet_expansion", E, D, "    "));
!                 B.b("  </div>\n</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_timestamp_nolink: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<span class="_timestamp js-tweet-timestamp" title="');
!                 B.b(B.v(B.f("explicit_timestamp", E, D, 0)));
!                 B.b('" data-time="');
!                 B.b(B.v(B.f("actual_timestamp", E, D, 0)));
!                 B.b('" data-long-form="true">');
!                 B.b(B.v(B.f("full_timestamp", E, D, 0)));
!                 if (!B.s(B.f("full_timestamp", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b("&nbsp;")
!                 }
!                 B.b("</span>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             user_css_p1: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b("\n" + C);
!                 B.b('<style id="user-style-');
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b('">\n  body.user-style-');
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" {\n");
!                 if (B.s(B.f("profile_use_background_image", E, D, 1), E, D, 0, 114, 301, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      background-position: left 40px;\n      background-attachment: fixed;\n");
!                         if (!F.s(F.f("profile_background_tile", H, G, 1), H, G, 1, 0, 0, "")) {
!                             F.b("        background-repeat: no-repeat;\n")
!                         }
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("profile_background_color", E, D, 1), E, D, 0, 368, 428, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      background-color: #");
!                         F.b(F.v(F.f("profile_background_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("profile_text_color", E, D, 1), E, D, 0, 485, 528, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      color: #");
!                         F.b(F.v(F.f("profile_text_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" a,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" ul.stream-tabs li,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .component .promo strong,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .message-thread-preview:hover .message-count,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .list-membership-container li.create-a-list {\n");
!                 if (B.s(B.f("profile_link_color", E, D, 1), E, D, 0, 894, 937, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      color: #");
!                         F.b(F.v(F.f("profile_link_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .stream-item:hover .tweet-screen-name,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .stream-item:hover .tweet-timestamp,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .stream-item:hover .tweet-geo-text,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .stream-item:hover .user-profile-link,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" span.user-stat-link,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" a.title-link:hover,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" a.user-stats-count:hover span.user-stats-stat,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-small-list-item:hover a.user-screen-name,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-small-list-item:hover .user-meta a,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .user-detailed-list-item:hover a.user-screen-name,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .tweet-activity:hover a.latest-tweet-timestamp,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .stream-item:hover a.icon-link,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .stream-item:hover a.icon-link b,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .stream-item:hover .tweet-feedback,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .promoted-tweet:hover .social-context a,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard ul.trends li a:hover span.icon-link,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard-activity-item-sentence .dashboard-activity-item-entity,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard-activity-item-sentence .dashboard-activity-item-entity .user,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard-activity-item-sentence .dashboard-activity-item-count,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard-activity-item-link:hover .dashboard-activity-item-sentence,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard-activity-item-link:hover .dashboard-activity-item-sentence span.user,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .onebox-user-screen-name:hover {\n");
!                 if (B.s(B.f("profile_link_color", E, D, 1), E, D, 0, 2773, 2827, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      color: #");
!                         F.b(F.v(F.f("profile_link_color", H, G, 0)));
!                         F.b(" !important;\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item:hover .tweet-screen-name {\n    color: #333 !important;\n  }\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item:hover .tweet-timestamp {\n    color: #999 !important;\n  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .hovered-stream-item,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .stream-item:hover,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" #new-tweets-bar,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" #new-tweets-bar:active {\n");
!                 if (B.s(B.f("rgba_tweet_background_color", E, D, 1), E, D, 0, 3343, 3405, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      background-color: ");
!                         F.b(F.v(F.f("rgba_tweet_background_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("rgba_tweet_border_color", E, D, 1), E, D, 0, 3470, 3524, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      border-color: ");
!                         F.b(F.v(F.f("rgba_tweet_border_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item:hover {\n    border-top-color: transparent;\n    border-bottom-color: #EBEBEB;\n  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" #new-tweets-bar:hover {\n");
!                 if (B.s(B.f("rgba_newtweets_background_color", E, D, 1), E, D, 0, 3795, 3861, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      background-color: ");
!                         F.b(F.v(F.f("rgba_newtweets_background_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("rgba_newtweets_border_color", E, D, 1), E, D, 0, 3934, 3992, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      border-color: ");
!                         F.b(F.v(F.f("rgba_newtweets_border_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-small-list-item .user-screen-name,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .profile-screenname,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .title-link,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" div.latest-tweet .latest-tweet-timestamp,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" div.truncated-tweet .latest-tweet-timestamp,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" a.user-stats-count span.user-stats-stat,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .welcome-steps li .active a strong,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard-activity-item-sentence span.user {\n");
!                 if (B.s(B.f("profile_text_color", E, D, 1), E, D, 0, 4625, 4668, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      color: #");
!                         F.b(F.v(F.f("profile_text_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-small-list-item .user-full-name,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" span.trend-location,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .your-activity h3,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .trends-inner h3,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-rec-inner h3,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .latest-tweet,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .truncated-tweet,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .latest-tweet a.latest-tweet-timestamp,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .truncated-tweet a.latest-tweet-timestamp,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-small-list-item .user-meta,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-small-list-item .user-meta a,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-small-list-item .user-meta a s,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .social-context div,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .dot,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .component .promo,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .component .promo a.definition,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-small-list-item .dismiss,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-small-list-item .ellip,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .facets-media-not-displayed .not-displayed-text,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .copyright,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-small-list-item a.icon-link,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard ul.trends li a span.icon-link,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard-activity-item-link,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard-activity-item-sentence {\n");
!                 if (B.s(B.f("rgba_text_color", E, D, 1), E, D, 0, 6333, 6372, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      color: ");
!                         F.b(F.v(F.f("rgba_text_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" #page-container,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .user-sidebar-color,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expando-container .dashboard {\n");
!                 if (B.s(B.f("profile_sidebar_fill_color", E, D, 1), E, D, 0, 6605, 6668, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      \n      background: #");
!                         F.b(F.v(F.f("profile_sidebar_fill_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("rgba_sidebar_color", E, D, 1), E, D, 0, 6727, 6781, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      \n      background: ");
!                         F.b(F.v(F.f("rgba_sidebar_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .activity:hover .stream-item-activity-network .activity-supplement .activity-item-tweet .activity-item-tweet-content,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .hovered-stream-item .stream-item-activity-network .activity-supplement .activity-item-tweet .activity-item-tweet-content,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .stream-item-activity-network .activity-supplement .activity-item-tweet .activity-item-tweet-content  {\n");
!                 if (B.s(B.f("rgba_tweet_border_color", E, D, 1), E, D, 0, 7300, 7365, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      border-color: ");
!                         F.b(F.v(F.f("rgba_tweet_border_color", H, G, 0)));
!                         F.b(" !important;\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item:hover a.twitter-atreply:hover,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item.open a.twitter-atreply,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item.colorful-links a.twitter-atreply,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item:hover a.twitter-hashtag:hover,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item.open a.twitter-hashtag,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item.colorful-links a.twitter-hashtag,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item:hover a.twitter-timeline-link:hover,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item.open a.twitter-timeline-link,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .expanding-stream-item.colorful-links a.twitter-timeline-link {\n");
!                 if (B.s(B.f("profile_link_color", E, D, 1), E, D, 0, 8225, 8279, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      color: #");
!                         F.b(F.v(F.f("profile_link_color", H, G, 0)));
!                         F.b(" !important;\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" s,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .pretty-link s {\n");
!                 if (B.s(B.f("profile_pretty_link_color", E, D, 1), E, D, 0, 8430, 8480, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      color: #");
!                         F.b(F.v(F.f("profile_pretty_link_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard s,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .pretty-link s,\n  body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .dashboard .user-small-list-item:hover .user-meta a s {\n");
!                 if (B.s(B.f("profile_pretty_link_sidebar_color", E, D, 1), E, D, 0, 8757, 8815, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      color: #");
!                         F.b(F.v(F.f("profile_pretty_link_sidebar_color", H, G, 0)));
!                         F.b(";\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  }\n\n");
!                 B.b(B.rp("pill_css", E, D, "  "));
!                 B.b("</style>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             withheld_message: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="withheld-message">');
!                 B.b(B.v(B.f("text", E, D, 0)));
!                 B.b('  <a href="');
!                 B.b(B.v(B.f("withheld_help_path", E, D, 0)));
!                 B.b('" target="_blank">Learn more</a></div>\n');
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_contributor: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 if (B.s(B.f("contributor", E, D, 1), E, D, 0, 16, 170, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('  <span class="tweet-contributors">by <a href="');
!                         F.b(F.v(F.f("profile_path", H, G, 0)));
!                         F.b('" class="user-profile-link" data-screen-name="');
!                         F.b(F.v(F.f("screen_name", H, G, 0)));
!                         F.b('">');
!                         F.b(F.v(F.f("screen_name", H, G, 0)));
!                         F.b("</a></span>\n")
!                     });
!                     E.pop()
!                 }
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             new_tweets_bar: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="stream-item">\n  <div class="new-tweets-bar js-new-tweets-bar">\n');
!                 if (B.s(B.f("tweets_count_phrase", E, D, 1), E, D, 0, 103, 138, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("      ");
!                         F.b(F.v(F.f("tweets_count_phrase", H, G, 0)));
!                         F.b("\n" + C)
!                     });
!                     E.pop()
!                 }
!                 if (!B.s(B.f("tweets_count_phrase", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b("      ");
!                     if (B.s(B.f("count_one", E, D, 1), E, D, 0, 212, 231, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             F.b(F.v(F.f("count", H, G, 0)));
!                             F.b(" new Tweet")
!                         });
!                         E.pop()
!                     }
!                     if (B.s(B.f("count_other", E, D, 1), E, D, 0, 261, 281, "{{ }}")) {
!                         B.rs(E, D, function (H, G, F) {
!                             F.b(F.v(F.f("count", H, G, 0)));
!                             F.b(" new Tweets")
!                         });
!                         E.pop()
!                     }
!                     B.b("\n" + C)
!                 }
!                 B.b("  </div>\n</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             posting_tweet_box: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<form method="post" action="/status/update">\n  <div class="tweet-box condensed">\n    <div class="tweet-box-title">\n      <h2>Whats happening?</h2>\n    </div>\n    <div class="text-area">\n      <div class="text-area-editor twttr-editor">\n        <textarea class="twitter-anywhere-tweet-box-editor" name="status" style="width: 482px; height: 36px;"></textarea>\n      </div>\n    </div>\n  </div>\n</form>\n');
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_actions: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b(' <ul class="actions js-actions">\n  <li class="action-reply-container">\n    <a class="with-icn js-action-reply" data-modal="tweet-reply" href="#" title="Reply">\n      <i class="action-reply"></i>\n      <b>Reply</b>\n    </a>\n  </li>\n');
!                 if (B.s(B.f("allowed_to_retweet", E, D, 1), E, D, 0, 256, 568, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('    <li class="action-rt-container">\n      <a class="with-icn js-toggle-rt" data-modal="tweet-retweet" href="#">\n        <i class="action-rt"></i>\n        \n        <b><span class="undo-retweet" title="Undo retweet">Retweeted</span><span class="retweet" title="Retweet">Retweet</span></b>\n      </a>\n    </li>\n')
!                     });
!                     E.pop()
!                 }
!                 B.b('  <li class="action-del-container">\n    <a class="with-icn js-action-del" href="#" title="Delete">\n      <i class="action-del"></i>\n      <b>Delete</b>\n    </a>\n  </li>\n  <li class="action-fav-container">\n    <a class="with-icn js-toggle-fav" href="#">\n      <i class="action-fav"></i>\n      \n      <b><span class="unfavorite" title="Undo favorite">Favorited</span><span class="favorite" title="Favorite">Favorite</span></b>\n    </a>\n  </li>\n');
!                 if (!B.s(B.f("anatomy_world", E, D, 1), E, D, 1, 0, 0, "")) {
!                     B.b('    <li class="action-open-container">\n      <span class="separator">&middot;</span>\n      <a class="with-icn js-open-close-tweet" href="');
!                     B.b(B.v(B.f("permalink_path", E, D, 0)));
!                     B.b('">\n        <span class="close-tweet" title="Close Tweet"> Close</span>\n        <span class="open-tweet" title="Open Tweet"> Open</span>\n        <span class="details-tweet" title="View Tweet details"> Details</span>\n      </a>\n    </li>\n')
!                 }
!                 B.b("</ul>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_details_dropdown: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="tweet-details-dropdown js-tweet-details-dropdown">\n  <div class="tweet-details-fixer">\n    <div class="tweet-details">\n      <div class="tweet-media-container js-tweet-media-container"></div>\n      <div class="loading-media js-media-loading-indicator">Loading media...</div>\n      <div class="machine-translated-tweet js-machine-translated-tweet"></div>\n      ');
!                 if (B.s(B.f("has_retweet_count", E, D, 1), E, D, 0, 394, 451, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('<div class="social-proof js-tweet-stats-container"></div>')
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 B.b("      ");
!                 if (B.s(B.f("show_geo_icon", E, D, 1), E, D, 0, 498, 533, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('<div class="geo js-tiny-geo"></div>')
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 B.b('      <div class="via">\n        <span class="tweet-source">');
!                 B.b(B.v(B.f("explicit_timestamp", E, D, 0)));
!                 B.b("</span>\n");
!                 B.b(B.rp("tweet_source", E, D, "        "));
!                 B.b('        <span class="tweet-source">&middot;</span>\n        <a href="');
!                 B.b(B.v(B.f("permalink_path", E, D, 0)));
!                 B.b('" class="tweet-source js-permalink">Details</a>\n      </div>\n    </div>\n  </div>\n</div>\n');
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             common_tweet_classes: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b("\n" + C);
!                 if (B.s(B.f("is_sponsored", E, D, 1), E, D, 0, 18, 33, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(" promoted-tweet")
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("is_my_tweet", E, D, 1), E, D, 0, 66, 75, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(" my-tweet")
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("favorited", E, D, 1), E, D, 0, 105, 115, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(" favorited")
!                     });
!                     E.pop()
!                 }
!                 if (B.s(B.f("current_user_retweet", E, D, 1), E, D, 0, 154, 164, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(" retweeted")
!                     });
!                     E.pop()
!                 }
!                 B.b("\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_source: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<span class="tweet-source">via ');
!                 B.b(B.t(B.f("source", E, D, 0)));
!                 B.b("</span>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             dashboard: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="dashboard">\n');
!                 if (B.s(B.f("rendering_on_server", E, D, 1), E, D, 0, 50, 80, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(F.rp("mini_home_profile", H, G, "    "))
!                     });
!                     E.pop()
!                 }
!                 B.b("</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             page: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b(B.rp("dashboard", E, D, ""));
!                 B.b(B.rp("content", E, D, ""));
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             stream_tweet_expansion: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="expanded-content js-tweet-details-dropdown"></div>\n');
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             home_page: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="main-content">\n');
!                 if (B.s(B.f("render_page_content", E, D, 1), E, D, 0, 53, 3328, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('    <div class="page-header home-header">\n      <div id="main-tweet-box">\n');
!                         F.b(F.rp("posting_tweet_box", H, G, "        "));
!                         F.b('      </div>\n      <ul class="stream-tabs">\n        <li class="stream-tab stream-tab-home ');
!                         if (F.s(F.f("active_tab_home", H, G, 1), H, G, 0, 269, 275, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b("active")
!                             });
!                             H.pop()
!                         }
!                         F.b('">\n          <a class="tab-text" title=\'All you follow\' href="');
!                         F.b(F.v(F.f("index_path", H, G, 0)));
!                         F.b('">Timeline</a>\n        </li>\n\n');
!                         if (F.s(F.f("decider_activity_read", H, G, 1), H, G, 0, 435, 1026, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 if (I.s(I.f("decider_activity_dark_read", K, J, 1), K, J, 0, 477, 986, "{{ }}")) {
!                                     I.rs(K, J, function (N, M, L) {
!                                         L.b('            <li class="stream-tab stream-tab-your_activity ');
!                                         if (L.s(L.f("active_tab_your_activity", N, M, 1), N, M, 0, 566, 572, "{{ }}")) {
!                                             L.rs(N, M, function (Q, P, O) {
!                                                 O.b("active")
!                                             });
!                                             N.pop()
!                                         }
!                                         L.b('">\n              <a class="tab-text" title=\'@');
!                                         L.b(L.v(L.f("current_user_screen_name", N, M, 0)));
!                                         L.b("' href=\"");
!                                         L.b(L.v(L.f("your_activity_path", N, M, 0)));
!                                         L.b('">@');
!                                         L.b(L.v(L.f("current_user_screen_name", N, M, 0)));
!                                         L.b('</a>\n            </li>\n            <li class="stream-tab stream-tab-activity ');
!                                         if (L.s(L.f("active_tab_activity", N, M, 1), N, M, 0, 836, 842, "{{ }}")) {
!                                             L.rs(N, M, function (Q, P, O) {
!                                                 O.b("active")
!                                             });
!                                             N.pop()
!                                         }
!                                         L.b('">\n              <a class="tab-text" title=\'Activity\' href="');
!                                         L.b(L.v(L.f("activity_path", N, M, 0)));
!                                         L.b('">Activity</a>\n            </li>\n')
!                                     });
!                                     K.pop()
!                                 }
!                             });
!                             H.pop()
!                         }
!                         F.b("\n" + C);
!                         if (!F.s(F.f("decider_activity_read", H, G, 1), H, G, 1, 0, 0, "")) {
!                             F.b('          <li class="stream-tab stream-tab-mentions ');
!                             if (F.s(F.f("active_tab_mentions", H, G, 1), H, G, 0, 1165, 1171, "{{ }}")) {
!                                 F.rs(H, G, function (K, J, I) {
!                                     I.b("active")
!                                 });
!                                 H.pop()
!                             }
!                             F.b('">\n            <a class="tab-text" title=\'Mentions\' href="');
!                             F.b(F.v(F.f("mentions_path", H, G, 0)));
!                             F.b('">@Mentions</a>\n          </li>\n          <li class="stream-tab stream-tab-retweets dropdown-link ');
!                             if (F.s(F.f("active_tab_retweets", H, G, 1), H, G, 0, 1392, 1398, "{{ }}")) {
!                                 F.rs(H, G, function (K, J, I) {
!                                     I.b("active")
!                                 });
!                                 H.pop()
!                             }
!                             F.b('">\n            <a class="tab-text" href="#">Retweets<i></i></a>\n          </li>\n')
!                         }
!                         F.b("\n" + C);
!                         F.b('        <li class="stream-tab stream-tab-searches dropdown-link ');
!                         if (F.s(F.f("active_tab_searches", H, G, 1), H, G, 0, 1626, 1632, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b("active")
!                             });
!                             H.pop()
!                         }
!                         F.b('">\n          <a class="tab-text" href="#">Searches<i></i></a>\n        </li>\n\n        <li class="stream-tab stream-tab-lists dropdown-link ');
!                         if (F.s(F.f("active_tab_lists", H, G, 1), H, G, 0, 1815, 1821, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b("active")
!                             });
!                             H.pop()
!                         }
!                         F.b('">\n          <a class="tab-text" href="#">Lists<i></i></a>\n        </li>\n');
!                         if (F.s(F.f("decider_network_discovery", H, G, 1), H, G, 0, 1953, 2211, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b('          <li class="stream-tab stream-tab-discovery activity-subtabs ');
!                                 if (I.s(I.f("active_tab_network_discovery", K, J, 1), K, J, 0, 2057, 2063, "{{ }}")) {
!                                     I.rs(K, J, function (N, M, L) {
!                                         L.b("active")
!                                     });
!                                     K.pop()
!                                 }
!                                 I.b('">\n            <a class="tab-text" title=\'Discover\' href="');
!                                 I.b(I.v(I.f("discovery_path", K, J, 0)));
!                                 I.b('">Discover</a>\n          </li>\n')
!                             });
!                             H.pop()
!                         }
!                         F.b("      </ul>\n    </div>\n");
!                         if (F.s(F.f("decider_activity_read", H, G, 1), H, G, 0, 2295, 3092, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 if (I.s(I.f("decider_activity_dark_read", K, J, 1), K, J, 0, 2333, 3056, "{{ }}")) {
!                                     I.rs(K, J, function (N, M, L) {
!                                         if (L.s(L.f("activity_subtabs", N, M, 1), N, M, 0, 2363, 3028, "{{ }}")) {
!                                             L.rs(N, M, function (Q, P, O) {
!                                                 O.b('          <ul class="stream-subtabs stream-subtabs-activity ');
!                                                 if (O.s(O.f("active_tab_activity", Q, P, 1), Q, P, 0, 2448, 2454, "{{ }}")) {
!                                                     O.rs(Q, P, function (T, S, R) {
!                                                         R.b("active")
!                                                     });
!                                                     Q.pop()
!                                                 }
!                                                 O.b('">\n            <li class="stream-tab stream-subtab-your_activity ');
!                                                 if (O.s(O.f("active_subtab_your_activity", Q, P, 1), Q, P, 0, 2575, 2581, "{{ }}")) {
!                                                     O.rs(Q, P, function (T, S, R) {
!                                                         R.b("active")
!                                                     });
!                                                     Q.pop()
!                                                 }
!                                                 O.b('">\n              <a class="tab-text" href="');
!                                                 O.b(O.v(O.f("your_activity_path", Q, P, 0)));
!                                                 O.b('">about you</a>\n            </li>\n            <li class="stream-tab stream-tab-separator">&middot;</li>\n            <li class="stream-tab stream-subtab-activity ');
!                                                 if (O.s(O.f("active_subtab_activity", Q, P, 1), Q, P, 0, 2866, 2872, "{{ }}")) {
!                                                     O.rs(Q, P, function (T, S, R) {
!                                                         R.b("active")
!                                                     });
!                                                     Q.pop()
!                                                 }
!                                                 O.b('">\n              <a class="tab-text" href="');
!                                                 O.b(O.v(O.f("activity_path", Q, P, 0)));
!                                                 O.b('">by people you follow</a>\n            </li>\n          </ul>\n')
!                                             });
!                                             N.pop()
!                                         }
!                                     });
!                                     K.pop()
!                                 }
!                             });
!                             H.pop()
!                         }
!                         F.b(F.rp("stream_manager", H, G, "    "));
!                         F.b("    ");
!                         if (F.s(F.f("rendering_on_server", H, G, 1), H, G, 0, 3171, 3301, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b("<script>twttr.tweetsVisibleTime = new Date();if (window.ttft) window.ttft.serverRendered('home');twttr.keynoteTTFTPing();<\/script>")
!                             });
!                             H.pop()
!                         }
!                         F.b("\n" + C)
!                     });
!                     E.pop()
!                 }
!                 B.b('</div>\n<div class="dashboard">\n');
!                 if (B.s(B.f("render_page_content", E, D, 1), E, D, 0, 3410, 3483, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         if (F.s(F.f("current_user", H, G, 1), H, G, 0, 3432, 3463, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b(I.rp("home_dashboard", K, J, "      "))
!                             });
!                             H.pop()
!                         }
!                     });
!                     E.pop()
!                 }
!                 B.b("</div>\n\n");
!                 B.b(B.rp("details_pane_container", E, D, ""));
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             content: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<div class="content-main js-content-main breakable">\n  <div id="js-promptbird-below-black-bar-hook"></div>\n  <div id="js-empty-timeline-recommendations-module-hook"></div>\n  <div class="content-header js-stream-header">\n');
!                 B.b(B.rp("stream_header", E, D, "    "));
!                 B.b('  </div>\n  <div class="stream js-stream-manager-container">\n');
!                 if (B.s(B.f("rendering_on_server", E, D, 1), E, D, 0, 332, 472, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b(F.rp("stream_manager", H, G, "      "));
!                         F.b("      <script>if (window.ttft) window.ttft.serverRendered('");
!                         F.b(F.v(F.f("page_name", H, G, 0)));
!                         F.b("');twttr.keynoteTTFTPing();<\/script>\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("  </div>\n</div>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             pill_css: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b("\n" + C);
!                 B.b(".profile-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" a {\n");
!                 if (B.s(B.f("profile_link_color", E, D, 1), E, D, 0, 61, 111, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b("    color: #");
!                         F.b(F.v(F.f("profile_link_color", H, G, 0)));
!                         F.b(" !important;\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("}\n\na:hover .geo-pin, body.user-style-");
!                 B.b(B.v(B.f("screen_name", E, D, 0)));
!                 B.b(" .stream-item:hover .geo-pin {\n  background-color: #");
!                 B.b(B.v(B.f("profile_link_color", E, D, 0)));
!                 B.b(";\n}\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             tweet_labels: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 if (B.s(B.f("is_top_tweet", E, D, 1), E, D, 0, 17, 225, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('    <span class="tweet-context icon-link"><i class="badge-tweet badge-tweet-top"></i>');
!                         if (F.s(F.f("retweet_count", H, G, 1), H, G, 0, 121, 154, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b("Retweeted ");
!                                 I.b(I.v(I.f("retweet_count", K, J, 0)));
!                                 I.b(" times")
!                             });
!                             H.pop()
!                         }
!                         if (!F.s(F.f("retweet_count", H, G, 1), H, G, 1, 0, 0, "")) {
!                             F.b("Top Tweet")
!                         }
!                         F.b("</span>\n")
!                     });
!                     E.pop()
!                 }
!                 B.b("\n" + C);
!                 if (B.s(B.f("is_sponsored", E, D, 1), E, D, 0, 261, 931, "{{ }}")) {
!                     B.rs(E, D, function (H, G, F) {
!                         F.b('  <a href="');
!                         if (F.s(F.f("retweeting_status", H, G, 1), H, G, 0, 295, 329, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 if (I.s(I.f("user", K, J, 1), K, J, 0, 304, 320, "{{ }}")) {
!                                     I.rs(K, J, function (N, M, L) {
!                                         L.b(L.v(L.f("profile_path", N, M, 0)))
!                                     });
!                                     K.pop()
!                                 }
!                             });
!                             H.pop()
!                         }
!                         if (!F.s(F.f("retweeting_status", H, G, 1), H, G, 1, 0, 0, "")) {
!                             if (F.s(F.f("user", H, G, 1), H, G, 0, 382, 398, "{{ }}")) {
!                                 F.rs(H, G, function (K, J, I) {
!                                     I.b(I.v(I.f("profile_path", K, J, 0)))
!                                 });
!                                 H.pop()
!                             }
!                         }
!                         F.b('" class="icon-link promoted-arrow tweet-context user-profile-link js-action-profile-promoted" data-user-id="');
!                         if (F.s(F.f("user", H, G, 1), H, G, 0, 546, 552, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 I.b(I.v(I.f("id", K, J, 0)))
!                             });
!                             H.pop()
!                         }
!                         F.b('" title="');
!                         F.b(F.v(F.f("disclosure_text", H, G, 0)));
!                         F.b('"><span><i class="badge-tweet badge-tweet-');
!                         F.b(F.v(F.f("disclosure_type", H, G, 0)));
!                         F.b('"></i><b>Promoted by ');
!                         F.b(F.v(F.f("advertiser_name", H, G, 0)));
!                         F.b("</b></span></a>\n\n");
!                         if (F.s(F.f("in_home_page", H, G, 1), H, G, 0, 726, 913, "{{ }}")) {
!                             F.rs(H, G, function (K, J, I) {
!                                 if (!I.s(I.f("rendering_on_server", K, J, 1), K, J, 1, 0, 0, "")) {
!                                     I.b('      <a class="icon-link tweet-feedback dismiss-action js-action-dismiss"><i></i><b>Dismiss</b></a>\n')
!                                 }
!                                 I.b("    ");
!                                 I.b(I.t(I.f("social_context", K, J, 0)));
!                                 I.b("\n" + C)
!                             });
!                             H.pop()
!                         }
!                     });
!                     E.pop()
!                 }
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             }),
!             user_link: new Mustache.TwitterTemplate(function (E, D, C) {
!                 var B = this;
!                 B.b(C = C || "");
!                 B.b('<a class="pretty-link js-user-profile-link" href="');
!                 B.b(B.v(B.f("profile_path", E, D, 0)));
!                 B.b('" data-user-id="');
!                 B.b(B.v(B.f("id", E, D, 0)));
!                 B.b('"><b>');
!                 B.b(B.v(B.f("name", E, D, 0)));
!                 B.b("</b></a>\n");
!                 return B.fl()
!             }, "", Mustache.twitterHogan, {
!                 sectionTags: [{
!                     o: "_i",
!                     c: "i"
!                 }]
!             })
          })
      }
      A();
--- 7300,7350 ----
  provide("/account/templates_t1_core.js", function (A) {
      if (!twttr.isMockview) {
          twttr.provide("twttr.templates", {
!             details_pane_container: '\u003Cdiv id="details-pane-outer"\u003E\n  \u003Cdiv class="details-pane-shell"\u003E\n    \u003Cdiv class="details-pane"\u003E\n      {{{pane}}}\n    \u003C/div\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n',
!             stream_item: '\u003Cdiv class="js-stream-item stream-item {{item_class}}" data-item-id="{{item_id}}" data-item-type="{{item_type}}"{{#rendering_on_server}} id="stream-item-{{item_type}}-{{item_id}}"{{/rendering_on_server}}\u003E\n  {{{item_html}}}\n\u003C/div\u003E\n',
!             tweet_timestamp_nolink: '\u003Cspan class="_timestamp js-tweet-timestamp" title="{{explicit_timestamp}}" data-time="{{actual_timestamp}}" data-long-form="true"\u003E{{full_timestamp}}{{^full_timestamp}}\u0026nbsp;{{/full_timestamp}}\u003C/span\u003E\n',
!             new_tweets_bar: '\u003Cdiv class="stream-item"\u003E\n  \u003Cdiv class="new-tweets-bar js-new-tweets-bar"\u003E\n    {{#tweets_count_phrase}}\n      {{tweets_count_phrase}}\n    {{/tweets_count_phrase}}\n    {{^tweets_count_phrase}}\n      {{#count_one}}{{count}} new Tweet{{/count_one}}{{#count_other}}{{count}} new Tweets{{/count_other}}\n    {{/tweets_count_phrase}}\n  \u003C/div\u003E\n\u003C/div\u003E\n',
!             dashboard: '\u003Cdiv class="dashboard"\u003E\n  {{#rendering_on_server}}\n    {{\u003Emini_home_profile}}\n  {{/rendering_on_server}}\n\u003C/div\u003E\n',
!             user_css_t1: '\n\u003Cstyle id="user-style-{{style_namespace}}" class="js-user-style"\u003E\n\n\n\n\n\n\n\n\n\na,\n\n\n\n.btn-link,\n\n\n\n\n  \n  \n\n.pretty-link{{colon_hover}} s,\n.pretty-link{{colon_hover}} b,\n/* Metadata */\n.ns-experiment .story-title a{{colon_hover}},\n/* Account Group */\n.metadata a{{colon_hover}},\n\n.account-group{{colon_hover}} .fullname,\n\n.stats a{{colon_hover}},\n.stats a{{colon_hover}} strong,\n\n.profile-modal-header .fullname a{{colon_hover}},\n.profile-modal-header .username a{{colon_hover}},\n\n.story-article{{colon_hover}} .metadata,\n\n.find-friends-sources li{{colon_hover}} .source,\n\n\n\n\n\n.stream-item a{{colon_hover}} .fullname,\n.stream-item .time a{{colon_hover}},\n\n.stream-item .view-all-supplements{{colon_hover}},\n\n.tweet .details,\n.tweet .content-expansion a{{colon_hover}},\n.tweet p a{{colon_hover}},\n.tweet{{colon_hover}} .action-open-container a,\n\n.client-and-actions a{{colon_hover}},\n\n.dismiss-promoted{{colon_hover}} b,\n\n.tweet .context .pretty-link{{colon_hover}} s,\n.tweet .context .pretty-link{{colon_hover}} b,\n\n.list .username a{{colon_hover}},\n.list-membership-container .create-a-list,\n.list-membership-container .create-a-list{{colon_hover}},\n\n.permalink-tweet p a,\n.permalink-tweet .actions a,\n.tweet .actions li{{colon_hover}} b,\n.open .tweet p a,\n.open .original-tweet .action-open-container a,\n.open .original-tweet .actions b,\n\n\n\n.story-header{{colon_hover}} .view-tweets,\n.card .list-details a{{colon_hover}},\n.card .card-body{{colon_hover}} .attribution,\n.new-tweets-bar,\n.onebox .soccer ul.ticker a{{colon_hover}},\n.ns-experiment .story-body-link a{{colon_hover}},\n\n\n\n.remove-background-btn,\n\n\n\n.stream-item-activity-me .latest-tweet .tweet-row a{{colon_hover}},\n\n\n\n.colored-actions.tweet .actions a,\n.colored-links.tweet p a {\n  {{#profile_link_color}}\n    color: #{{profile_link_color}};\n  {{/profile_link_color}}\n  {{^profile_link_color}}\n    color: #0084B4;\n  {{/profile_link_color}}\n}\n\n\n\n\n\ns,\n.pretty-link{{colon_hover}} s,\n.stream-item-activity-me .latest-tweet .tweet-row a{{colon_hover}} s {\n  {{#profile_pretty_link_color}}\n    color: #{{profile_pretty_link_color}};\n  {{/profile_pretty_link_color}}\n  {{^profile_pretty_link_color}}\n    color: #66B5D2;\n  {{/profile_pretty_link_color}}\n}\n\n\n\n\n\n.tweet .details .sm-reply,\n.tweet .details .sm-image,\n.tweet .details .sm-video,\n.tweet .details .sm-audio,\n.tweet .details .sm-geo,\n.tweet .details .sm-embed,\n.tweet .details .sm-convo,\n\n{{#has_hovers_in_css}}\n  .with-icn:hover .action-reply,\n  .with-icn:hover .action-rt,\n  .with-icn:hover .action-fav,\n  .with-icn:hover .action-del,\n{{/has_hovers_in_css}}\n{{^has_hovers_in_css}}\n  .tweet .with-icn .action-reply,\n  .tweet .with-icn .action-rt,\n  .tweet .with-icn .action-fav,\n  .tweet .with-icn .action-del,\n{{/has_hovers_in_css}}\n.open .original-tweet .actions i,\n\n.permalink-tweet .actions .action-reply,\n.permalink-tweet .actions .action-rt,\n.permalink-tweet .actions .action-fav,\n.permalink-tweet .actions .action-del,\n\n.sm-top-tweet,\n\n\n\n.colored-actions .with-icn .action-reply,\n.colored-actions .with-icn .action-rt,\n.colored-actions .with-icn .action-fav,\n.colored-actions .with-icn .action-del {\n  {{#profile_link_color}}\n    background-color: #{{profile_link_color}};\n  {{/profile_link_color}}\n  {{^profile_link_color}}\n    background-color: #6684B4;\n  {{/profile_link_color}}\n}\n\nbody {\n  {{#profile_use_background_image}}\n    background-position: left 40px;\n    background-attachment: fixed;\n    background-repeat: repeat;\n    {{^profile_background_tile}}\n      background-repeat: no-repeat;\n    {{/profile_background_tile}}\n  {{/profile_use_background_image}}\n  {{#profile_background_color}}\n    background-color: #{{profile_background_color}};\n  {{/profile_background_color}}\n  {{^profile_background_color}}\n    background-color: #c0deed;\n  {{/profile_background_color}}\n}\n\n\n\n\n\n\n\n\n\n\n.anatomy .tweet p a,\n.anatomy .wrapper .content-main .tweet .actions a,\n.anatomy .tweet{{colon_hover}} .action-expand-container,\n.anatomy.oldstyle .wrapper .content-main .tweet{{colon_hover}} .actions .action-reply-container a {\n  {{#profile_link_color}}\n    color: #{{profile_link_color}};\n  {{/profile_link_color}}\n  {{^profile_link_color}}\n    color: #0084B4;\n  {{/profile_link_color}}\n}\n.anatomy .action-expand-container,\n.anatomy.oldstyle .wrapper .content-main .tweet .actions .action-reply-container a {\n  color: #999;\n}\n\n/* anatomy\'s world Tweet new styles */\n.anatomy .tweet .details .sm-reply,\n.anatomy .tweet .details .sm-image,\n.anatomy .tweet .details .sm-video,\n.anatomy .tweet .details .sm-audio,\n.anatomy .tweet .details .sm-geo,\n.anatomy .tweet .details .sm-embed,\n.anatomy .tweet .actions .action-reply,\n.anatomy .tweet .actions .action-rt,\n.anatomy .tweet .actions .action-fav,\n.anatomy .my-tweet .actions .action-del,\n.anatomy .permalink .tweet.permalink-tweet .actions i,\n.background-hover.anatomy .actions i,\n{{#has_hovers_in_css}}\n.anatomy.oldstyle .tweet:hover .actions .action-reply,\n/* Permalink replies/inreplyto color on hover */\n.anatomy .permalink-inner .actions .with-icn:hover .action-reply,\n.anatomy .permalink-inner .actions .with-icn:hover .action-rt,\n.anatomy .permalink-inner .actions .with-icn:hover .action-fav,\n.anatomy .permalink-inner .my-tweet .actions .with-icn:hover .action-del,\n.anatomy.oldstyle .permalink-inner .actions .with-icn:hover .action-reply,\n{{/has_hovers_in_css}}\n.anatomy.oldstyle .permalink-inner .permalink-tweet .actions .with-icn .action-reply,\n.anatomy.oldstyle .open .original-tweet .actions .with-icn .action-reply,\n.random-delete-selector {\n  {{#profile_link_color}}\n    background-color: #{{profile_link_color}};\n  {{/profile_link_color}}\n  {{^profile_link_color}}\n    background-color: #0084B4;\n  {{/profile_link_color}}\n}\n\n{{#has_hovers_in_css}}\n.content-main .stream-item .unclickable-tweet:hover a,\n.content-main .stream-item .unclickable-tweet a:hover {\n  color: #999;\n  text-decoration: none;\n}\n{{/has_hovers_in_css}}\n{{^has_hovers_in_css}}\n.content-main .stream-item .unclickable-tweet{{colon_hover}} a,\n.content-main .stream-item .unclickable-tweet a{{colon_hover}} {\n  color: #999;\n  text-decoration: none;\n}\n{{/has_hovers_in_css}}\n\n.anatomy .permalink-inner .tweet .actions .action-reply,\n.anatomy .permalink-inner .tweet .actions .action-rt,\n.anatomy .permalink-inner .tweet .actions .action-fav,\n.anatomy .permalink-inner .my-tweet .actions .action-del,\n.anatomy.oldstyle .tweet .actions .action-reply,\n.anatomy.oldstyle .permalink-inner .actions .with-icn .action-reply {\n  background-color: #999;\n}\n\n\u003C/style\u003E\n',
!             stream: '\u003Cdiv class="stream"\u003E\n  \n  \u003Cdiv class="js-stream-items stream-items" id="stream-items-id"\u003E\u003C/div\u003E\n\u003C/div\u003E\n',
!             tweet_context: '\n\n\u003Cdiv class="context"\u003E\n  {{#is_sponsored}}\n    \u003Cspan class="metadata with-icn js-disclosure" title="{{disclosure_text}}"\u003E\n      {{#was_retweeted}}\n        {{#retweeting_status}}\n          \u003Ci class="{{promoted_badge_class}}"\u003E\u003C/i\u003E\u003Ca href="{{#user}}{{profile_path}}{{/user}}" class="js-action-profile-promoted js-user-profile-link" data-user-id="{{#user}}{{id}}{{/user}}"\u003EPromoted by {{advertiser_name}}\u003C/a\u003E\n        {{/retweeting_status}}\n      {{/was_retweeted}}\n      {{^was_retweeted}}\n        \u003Ci class="{{promoted_badge_class}}"\u003E\u003C/i\u003E\u003Ca href="{{#user}}{{profile_path}}{{/user}}" class="js-action-profile-promoted js-user-profile-link" data-user-id="{{#user}}{{id}}{{/user}}"\u003EPromoted by {{advertiser_name}}\u003C/a\u003E\n      {{/was_retweeted}}\n    \u003C/span\u003E\n    {{#in_home_page}}\n      {{^rendering_on_server}}\n        \u003Ca class="dismiss-promoted js-action-dismiss with-icn" href="#"\u003E\u003Ci class="close"\u003E\u003C/i\u003E\u003Cb\u003E{{^abtest_dismiss_text_180_any_bucket}}Dismiss{{/abtest_dismiss_text_180_any_bucket}}{{#abtest_dismiss_text_180_dismiss_tweet}}Dismiss Tweet{{/abtest_dismiss_text_180_dismiss_tweet}}{{#abtest_dismiss_text_180_remove_tweet}}Remove Tweet{{/abtest_dismiss_text_180_remove_tweet}}{{#abtest_dismiss_text_180_not_interested}}Not interested{{/abtest_dismiss_text_180_not_interested}}\u003C/b\u003E\u003C/a\u003E\n      {{/rendering_on_server}}\n      {{{social_context}}}\n    {{/in_home_page}}\n  {{/is_sponsored}}\n  {{#is_top_tweet}}\n    \u003Cspan class="metadata with-icn"\u003E\n      \u003Ci class="badge-top"\u003E\u003C/i\u003E{{#retweet_count}}Retweeted {{retweet_count}} times{{/retweet_count}}{{^retweet_count}}Top Tweet{{/retweet_count}}\n    \u003C/span\u003E\n  {{/is_top_tweet}}\n  {{^is_sponsored}}\n    {{#was_retweeted}}\n      {{#retweeting_status}}\n        {{#user}}\n          \u003Cspan class="with-icn"\u003E\u003Ci class="{{^anatomy_world}}sm-rt{{/anatomy_world}}{{#anatomy_world}}badge-retweet{{/anatomy_world}}"\u003E\u003C/i\u003ERetweeted by \u003Ca class="pretty-link js-user-profile-link" href="{{profile_path}}" data-user-id="{{id}}"\u003E\u003Cb\u003E{{name}}\u003C/b\u003E\u003C/a\u003E\u003C/span\u003E\n        {{/user}}\n      {{/retweeting_status}}\n    {{/was_retweeted}}\n  {{/is_sponsored}}\n\u003C/div\u003E\n',
!             withheld_message: '\u003Cdiv class="withheld-message"\u003E{{text}}  \u003Ca href="{{withheld_help_path}}" target="_blank"\u003ELearn more\u003C/a\u003E\u003C/div\u003E\n',
!             user_link: '\u003Ca class="pretty-link js-user-profile-link" href="{{profile_path}}" data-user-id="{{id}}"\u003E\u003Cb\u003E{{name}}\u003C/b\u003E\u003C/a\u003E\n',
!             tweet_geo_text: '{{#has_geo}}\n  {{^show_geo_map}}\n    \u003Cdiv\u003E\n      \u003Ca class="js-tweet-geo-text tweet-geo-text" href="{{place_path}}"\u003E\n        {{#place_name}}from {{place_name}}{{/place_name}}{{^place_name}}view location{{/place_name}}\n      \u003C/a\u003E\n    \u003C/div\u003E\n  {{/show_geo_map}}\n{{/has_geo}}\n',
!             bg_img_css: '\n\u003Cstyle id="user-style-{{screen_name}}-bg-img" class="js-user-style-bg-img"\u003E\n  body.user-style-{{screen_name}} {\n    {{#profile_use_background_image}}\n      {{#profile_background_image_url}}\n        background-image: url({{profile_background_image_url}});\n      {{/profile_background_image_url}}\n    {{/profile_use_background_image}}\n  }\n\u003C/style\u003E\n',
!             home_page: '\u003Cdiv class="main-content"\u003E\n  {{#render_page_content}}\n    \u003Cdiv class="page-header home-header"\u003E\n      \u003Cdiv id="main-tweet-box"\u003E\n        {{\u003Eposting_tweet_box}}\n      \u003C/div\u003E\n      \u003Cul class="stream-tabs"\u003E\n        \u003Cli class="stream-tab stream-tab-home {{#active_tab_home}}active{{/active_tab_home}}"\u003E\n          \u003Ca class="tab-text" title=\'All you follow\' href="{{index_path}}"\u003ETimeline\u003C/a\u003E\n        \u003C/li\u003E\n\n        {{#decider_activity_read}}\n          {{#decider_activity_dark_read}}\n            \u003Cli class="stream-tab stream-tab-your_activity {{#active_tab_your_activity}}active{{/active_tab_your_activity}}"\u003E\n              \u003Ca class="tab-text" title=\'@{{current_user_screen_name}}\' href="{{your_activity_path}}"\u003E@{{current_user_screen_name}}\u003C/a\u003E\n            \u003C/li\u003E\n            \u003Cli class="stream-tab stream-tab-activity {{#active_tab_activity}}active{{/active_tab_activity}}"\u003E\n              \u003Ca class="tab-text" title=\'Activity\' href="{{activity_path}}"\u003EActivity\u003C/a\u003E\n            \u003C/li\u003E\n          {{/decider_activity_dark_read}}\n        {{/decider_activity_read}}\n\n        {{^decider_activity_read}}\n          \u003Cli class="stream-tab stream-tab-mentions {{#active_tab_mentions}}active{{/active_tab_mentions}}"\u003E\n            \u003Ca class="tab-text" title=\'Mentions\' href="{{mentions_path}}"\u003E@Mentions\u003C/a\u003E\n          \u003C/li\u003E\n          \u003Cli class="stream-tab stream-tab-retweets dropdown-link {{#active_tab_retweets}}active{{/active_tab_retweets}}"\u003E\n            \u003Ca class="tab-text" href="#"\u003ERetweets\u003Ci\u003E\u003C/i\u003E\u003C/a\u003E\n          \u003C/li\u003E\n        {{/decider_activity_read}}\n\n        \u003Cli class="stream-tab stream-tab-searches dropdown-link {{#active_tab_searches}}active{{/active_tab_searches}}"\u003E\n          \u003Ca class="tab-text" href="#"\u003ESearches\u003Ci\u003E\u003C/i\u003E\u003C/a\u003E\n        \u003C/li\u003E\n\n        \u003Cli class="stream-tab stream-tab-lists dropdown-link {{#active_tab_lists}}active{{/active_tab_lists}}"\u003E\n          \u003Ca class="tab-text" href="#"\u003ELists\u003Ci\u003E\u003C/i\u003E\u003C/a\u003E\n        \u003C/li\u003E\n        {{#decider_network_discovery}}\n          \u003Cli class="stream-tab stream-tab-discovery activity-subtabs {{#active_tab_network_discovery}}active{{/active_tab_network_discovery}}"\u003E\n            \u003Ca class="tab-text" title=\'Discover\' href="{{discovery_path}}"\u003EDiscover\u003C/a\u003E\n          \u003C/li\u003E\n        {{/decider_network_discovery}}\n      \u003C/ul\u003E\n    \u003C/div\u003E\n    {{#decider_activity_read}}\n      {{#decider_activity_dark_read}}\n        {{#activity_subtabs}}\n          \u003Cul class="stream-subtabs stream-subtabs-activity {{#active_tab_activity}}active{{/active_tab_activity}}"\u003E\n            \u003Cli class="stream-tab stream-subtab-your_activity {{#active_subtab_your_activity}}active{{/active_subtab_your_activity}}"\u003E\n              \u003Ca class="tab-text" href="{{your_activity_path}}"\u003Eabout you\u003C/a\u003E\n            \u003C/li\u003E\n            \u003Cli class="stream-tab stream-tab-separator"\u003E\u0026middot;\u003C/li\u003E\n            \u003Cli class="stream-tab stream-subtab-activity {{#active_subtab_activity}}active{{/active_subtab_activity}}"\u003E\n              \u003Ca class="tab-text" href="{{activity_path}}"\u003Eby people you follow\u003C/a\u003E\n            \u003C/li\u003E\n          \u003C/ul\u003E\n        {{/activity_subtabs}}\n      {{/decider_activity_dark_read}}\n    {{/decider_activity_read}}\n    {{\u003Estream_manager}}\n    {{#rendering_on_server}}\u003Cscript\u003Etwttr.tweetsVisibleTime = new Date();if (window.ttft) window.ttft.serverRendered(\'home\');twttr.keynoteTTFTPing();\u003C/script\u003E{{/rendering_on_server}}\n  {{/render_page_content}}\n\u003C/div\u003E\n\u003Cdiv class="dashboard"\u003E\n  {{#render_page_content}}\n    {{#current_user}}\n      {{\u003Ehome_dashboard}}\n    {{/current_user}}\n  {{/render_page_content}}\n\u003C/div\u003E\n\n{{\u003Edetails_pane_container}}\n',
!             posting_tweet_box: '\u003Cform method="post" action="/status/update"\u003E\n  \u003Cdiv class="tweet-box condensed"\u003E\n    \u003Cdiv class="tweet-box-title"\u003E\n      \u003Ch2\u003EWhat\u2019s happening?\u003C/h2\u003E\n    \u003C/div\u003E\n    \u003Cdiv class="text-area"\u003E\n      \u003Cdiv class="text-area-editor twttr-editor"\u003E\n        \u003Ctextarea class="twitter-anywhere-tweet-box-editor" name="status" style="width: 482px; height: 36px;"\u003E\u003C/textarea\u003E\n      \u003C/div\u003E\n    \u003C/div\u003E\n  \u003C/div\u003E\n\u003C/form\u003E\n',
!             tweet_actions: ' \u003Cul class="actions js-actions"\u003E\n  \u003Cli class="action-reply-container"\u003E\n    \u003Ca class="with-icn js-action-reply" data-modal="tweet-reply" href="#" title="Reply"\u003E\n      \u003Ci class="action-reply"\u003E\u003C/i\u003E\n      \u003Cb\u003EReply\u003C/b\u003E\n    \u003C/a\u003E\n  \u003C/li\u003E\n  {{#allowed_to_retweet}}\n    \u003Cli class="action-rt-container"\u003E\n      \u003Ca class="with-icn js-toggle-rt" data-modal="tweet-retweet" href="#"\u003E\n        \u003Ci class="action-rt"\u003E\u003C/i\u003E\n        \n        \u003Cb\u003E\u003Cspan class="undo-retweet" title="Undo retweet"\u003ERetweeted\u003C/span\u003E\u003Cspan class="retweet" title="Retweet"\u003ERetweet\u003C/span\u003E\u003C/b\u003E\n      \u003C/a\u003E\n    \u003C/li\u003E\n  {{/allowed_to_retweet}}\n  \u003Cli class="action-del-container"\u003E\n    \u003Ca class="with-icn js-action-del" href="#" title="Delete"\u003E\n      \u003Ci class="action-del"\u003E\u003C/i\u003E\n      \u003Cb\u003EDelete\u003C/b\u003E\n    \u003C/a\u003E\n  \u003C/li\u003E\n  \u003Cli class="action-fav-container"\u003E\n    \u003Ca class="with-icn js-toggle-fav" href="#"\u003E\n      \u003Ci class="action-fav"\u003E\u003C/i\u003E\n      \n      \u003Cb\u003E\u003Cspan class="unfavorite" title="Undo favorite"\u003EFavorited\u003C/span\u003E\u003Cspan class="favorite" title="Favorite"\u003EFavorite\u003C/span\u003E\u003C/b\u003E\n    \u003C/a\u003E\n  \u003C/li\u003E\n  {{^anatomy_world}}\n    \u003Cli class="action-open-container"\u003E\n      \u003Cspan class="separator"\u003E\u0026middot;\u003C/span\u003E\n      \u003Ca class="with-icn js-open-close-tweet" href="{{permalink_path}}"\u003E\n        \u003Cspan class="close-tweet" title="Close Tweet"\u003E Close\u003C/span\u003E\n        \u003Cspan class="open-tweet" title="Open Tweet"\u003E Open\u003C/span\u003E\n        \u003Cspan class="details-tweet" title="View Tweet details"\u003E Details\u003C/span\u003E\n      \u003C/a\u003E\n    \u003C/li\u003E\n  {{/anatomy_world}}\n\u003C/ul\u003E\n',
!             tweet_contributor: '{{#contributor}}\n  \u003Cspan class="tweet-contributors"\u003Eby \u003Ca href="{{profile_path}}" class="user-profile-link" data-screen-name="{{screen_name}}"\u003E{{screen_name}}\u003C/a\u003E\u003C/span\u003E\n{{/contributor}}\n',
!             tweet_labels: '{{#is_top_tweet}}\n    \u003Cspan class="tweet-context icon-link"\u003E\u003Ci class="badge-tweet badge-tweet-top"\u003E\u003C/i\u003E{{#retweet_count}}Retweeted {{retweet_count}} times{{/retweet_count}}{{^retweet_count}}Top Tweet{{/retweet_count}}\u003C/span\u003E\n{{/is_top_tweet}}\n\n{{#is_sponsored}}\n  \u003Ca href="{{#retweeting_status}}{{#user}}{{profile_path}}{{/user}}{{/retweeting_status}}{{^retweeting_status}}{{#user}}{{profile_path}}{{/user}}{{/retweeting_status}}" class="icon-link promoted-arrow tweet-context user-profile-link js-action-profile-promoted" data-user-id="{{#user}}{{id}}{{/user}}" title="{{disclosure_text}}"\u003E\u003Cspan\u003E\u003Ci class="badge-tweet badge-tweet-{{disclosure_type}}"\u003E\u003C/i\u003E\u003Cb\u003EPromoted by {{advertiser_name}}\u003C/b\u003E\u003C/span\u003E\u003C/a\u003E\n\n  {{#in_home_page}}\n    {{^rendering_on_server}}\n      \u003Ca class="icon-link tweet-feedback dismiss-action js-action-dismiss"\u003E\u003Ci\u003E\u003C/i\u003E\u003Cb\u003EDismiss\u003C/b\u003E\u003C/a\u003E\n    {{/rendering_on_server}}\n    {{{social_context}}}\n  {{/in_home_page}}\n{{/is_sponsored}}\n',
!             tweet_user_with_activity: "{{#user}}\n  \u003Cspan class='tweet-user-name'\u003E\n    \u003Ca class='tweet-screen-name user-profile-link js-action-profile-name' data-user-id='{{id}}' href='{{profile_path}}' title='{{name}}'\u003E{{screen_name}}\u003C/a\u003E\n    \u003Cspan class='tweet-full-name'\u003E{{connector}} {{{title_object}}}\u003C/span\u003E\n  \u003C/span\u003E\n{{/user}}\n",
!             stream_header: '\u003Cdiv class="header-inner"\u003E\n  \u003Ch2\u003E\n    \u003Cspan class="content-header-buttons js-header-button-container"\u003E\u003C/span\u003E\n    \u003Cspan class="js-stream-title"\u003E{{stream_title}}\u003C/span\u003E\n\n    \u003Csmall class="view-toggler js-view-toggler"\u003E\u003C/small\u003E\n  \u003C/h2\u003E\n  {{#header_help}}\u003Cp class="js-header-help subheader"\u003E{{{header_help}}}\u003C/p\u003E{{/header_help}}\n\u003C/div\u003E\n',
!             stream_activity: "\u003Cspan class='stream-activity-line'\u003E\u003Ci\u003E\u003C/i\u003E{{{sentence}}}\u003C/span\u003E\n",
!             stream_manager: '\u003Cdiv class="stream-manager js-stream-manager-container"{{#page_name_underscore}} id="{{page_name_underscore}}-stream-manager"{{/page_name_underscore}}\u003E\n  {{#tweets}}\n    \u003Cdiv class="stream-title"\u003E\u003C/div\u003E\n    \u003Cdiv class="stream-container"\u003E\n      \u003Cdiv class="stream {{#page_name_underscore}}{{page_name_underscore}}-stream{{/page_name_underscore}}"\u003E\n        \n        \u003Cdiv class="js-stream-items stream-items" id="stream-items-id"\u003E{{{tweets}}}\u003C/div\u003E\n        {{#show_empty_home}}\n          \u003Cdiv class="component"\u003E{{\u003Eempty_home}}\u003C/div\u003E\n        {{/show_empty_home}}\n        {{#include_stream_footer}}\n          \u003Cdiv class="component"\u003E{{\u003Estream_end}}\u003C/div\u003E\n        {{/include_stream_footer}}\n\n      \u003C/div\u003E\n    \u003C/div\u003E\n  {{/tweets}}\n  {{#rendering_on_server}}\n    {{^tweets}}\n      {{#profile_page}}\n        {{^can_view}}\n          {{\u003Estream}}\n        {{/can_view}}\n      {{/profile_page}}\n    {{/tweets}}\n  {{/rendering_on_server}}\n\u003C/div\u003E\n',
!             tweet_user_image_48: "{{#user}}\n\u003Cimg height=\"48\" width=\"48\" src='{{profile_image_url}}' alt='{{name}}' class='user-profile-link js-action-profile-avatar' data-user-id='{{id}}'/\u003E\n{{/user}}\n",
!             page: "{{\u003Edashboard}}\n{{\u003Econtent}}\n",
!             tweet_data: '\ndata-tweet-id="{{id}}"\n{{{tweet_impression_id}}}\ndata-item-id="{{id}}"\n{{#current_user_retweet}} data-my-retweet-id="{{id}}"{{/current_user_retweet}}\n{{#was_retweeted}}{{#retweeting_status}} data-retweet-id="{{id}}"{{/retweeting_status}}{{/was_retweeted}}\n{{#user}} data-screen-name="{{screen_name}}" data-user-id="{{id}}"{{/user}}\n{{#protected}} data-protected="true"{{/protected}}\n{{#is_sponsored}} data-promoted="true"{{/is_sponsored}}\n{{#show_geo_icon}} data-geo="true"{{/show_geo_icon}}\ndata-is-reply-to="{{is_reply}}"\n{{#status_data}} data-status="{{status_data}}"{{/status_data}}\n{{#rendering_on_server}}data-expanded-footer="{{#escape_html_for_attribute}}{{\u003Etweet_details}}{{/escape_html_for_attribute}}"{{/rendering_on_server}}\n',
!             more_button: '\u003Cdiv class="stream-item"\u003E\n  \u003Cdiv class="more-button-container"\u003E\n    \u003Ca class="more-button btn"\u003Emore\u003C/a\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n',
!             tweet_details_dropdown: '\u003Cdiv class="tweet-details-dropdown js-tweet-details-dropdown"\u003E\n  \u003Cdiv class="tweet-details-fixer"\u003E\n    \u003Cdiv class="tweet-details"\u003E\n      \u003Cdiv class="tweet-media-container js-tweet-media-container"\u003E\u003C/div\u003E\n      \u003Cdiv class="loading-media js-media-loading-indicator"\u003ELoading media...\u003C/div\u003E\n      \u003Cdiv class="machine-translated-tweet js-machine-translated-tweet"\u003E\u003C/div\u003E\n      {{#has_retweet_count}}\u003Cdiv class="social-proof js-tweet-stats-container"\u003E\u003C/div\u003E{{/has_retweet_count}}\n      {{#show_geo_icon}}\u003Cdiv class="geo js-tiny-geo"\u003E\u003C/div\u003E{{/show_geo_icon}}\n      \u003Cdiv class="via"\u003E\n        \u003Cspan class="tweet-source"\u003E{{explicit_timestamp}}\u003C/span\u003E\n        {{\u003Etweet_source}}\n        \u003Cspan class="tweet-source"\u003E\u0026middot;\u003C/span\u003E\n        \u003Ca href="{{permalink_path}}" class="tweet-source js-permalink"\u003EDetails\u003C/a\u003E\n      \u003C/div\u003E\n    \u003C/div\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n',
!             user_css_p1: '\n\u003Cstyle id="user-style-{{screen_name}}"\u003E\n  body.user-style-{{screen_name}} {\n    {{#profile_use_background_image}}\n      background-position: left 40px;\n      background-attachment: fixed;\n      {{^profile_background_tile}}\n        background-repeat: no-repeat;\n      {{/profile_background_tile}}\n    {{/profile_use_background_image}}\n    {{#profile_background_color}}\n      background-color: #{{profile_background_color}};\n    {{/profile_background_color}}\n    {{#profile_text_color}}\n      color: #{{profile_text_color}};\n    {{/profile_text_color}}\n  }\n\n  body.user-style-{{screen_name}} a,\n  body.user-style-{{screen_name}} ul.stream-tabs li,\n  body.user-style-{{screen_name}} .component .promo strong,\n  body.user-style-{{screen_name}} .message-thread-preview:hover .message-count,\n  body.user-style-{{screen_name}} .list-membership-container li.create-a-list {\n    {{#profile_link_color}}\n      color: #{{profile_link_color}};\n    {{/profile_link_color}}\n  }\n\n  body.user-style-{{screen_name}} .stream-item:hover .tweet-screen-name,\n  body.user-style-{{screen_name}} .stream-item:hover .tweet-timestamp,\n  body.user-style-{{screen_name}} .stream-item:hover .tweet-geo-text,\n  body.user-style-{{screen_name}} .stream-item:hover .user-profile-link,\n  body.user-style-{{screen_name}} span.user-stat-link,\n  body.user-style-{{screen_name}} a.title-link:hover,\n  body.user-style-{{screen_name}} a.user-stats-count:hover span.user-stats-stat,\n  body.user-style-{{screen_name}} .dashboard .user-small-list-item:hover a.user-screen-name,\n  body.user-style-{{screen_name}} .dashboard .user-small-list-item:hover .user-meta a,\n  body.user-style-{{screen_name}} .user-detailed-list-item:hover a.user-screen-name,\n  body.user-style-{{screen_name}} .tweet-activity:hover a.latest-tweet-timestamp,\n  body.user-style-{{screen_name}} .stream-item:hover a.icon-link,\n  body.user-style-{{screen_name}} .stream-item:hover a.icon-link b,\n  body.user-style-{{screen_name}} .stream-item:hover .tweet-feedback,\n  body.user-style-{{screen_name}} .promoted-tweet:hover .social-context a,\n  body.user-style-{{screen_name}} .dashboard ul.trends li a:hover span.icon-link,\n  body.user-style-{{screen_name}} .dashboard-activity-item-sentence .dashboard-activity-item-entity,\n  body.user-style-{{screen_name}} .dashboard-activity-item-sentence .dashboard-activity-item-entity .user,\n  body.user-style-{{screen_name}} .dashboard-activity-item-sentence .dashboard-activity-item-count,\n  body.user-style-{{screen_name}} .dashboard-activity-item-link:hover .dashboard-activity-item-sentence,\n  body.user-style-{{screen_name}} .dashboard-activity-item-link:hover .dashboard-activity-item-sentence span.user,\n  body.user-style-{{screen_name}} .onebox-user-screen-name:hover {\n    {{#profile_link_color}}\n      color: #{{profile_link_color}} !important;\n    {{/profile_link_color}}\n  }\n\n  body.user-style-{{screen_name}} .expanding-stream-item:hover .tweet-screen-name {\n    color: #333 !important;\n  }\n  body.user-style-{{screen_name}} .expanding-stream-item:hover .tweet-timestamp {\n    color: #999 !important;\n  }\n\n  body.user-style-{{screen_name}} .hovered-stream-item,\n  body.user-style-{{screen_name}} .stream-item:hover,\n  body.user-style-{{screen_name}} #new-tweets-bar,\n  body.user-style-{{screen_name}} #new-tweets-bar:active {\n    {{#rgba_tweet_background_color}}\n      background-color: {{rgba_tweet_background_color}};\n    {{/rgba_tweet_background_color}}\n    {{#rgba_tweet_border_color}}\n      border-color: {{rgba_tweet_border_color}};\n    {{/rgba_tweet_border_color}}\n  }\n\n  body.user-style-{{screen_name}} .expanding-stream-item:hover {\n    border-top-color: transparent;\n    border-bottom-color: #EBEBEB;\n  }\n\n  body.user-style-{{screen_name}} #new-tweets-bar:hover {\n    {{#rgba_newtweets_background_color}}\n      background-color: {{rgba_newtweets_background_color}};\n    {{/rgba_newtweets_background_color}}\n    {{#rgba_newtweets_border_color}}\n      border-color: {{rgba_newtweets_border_color}};\n    {{/rgba_newtweets_border_color}}\n  }\n\n  body.user-style-{{screen_name}} .dashboard .user-small-list-item .user-screen-name,\n  body.user-style-{{screen_name}} .profile-screenname,\n  body.user-style-{{screen_name}} .title-link,\n  body.user-style-{{screen_name}} div.latest-tweet .latest-tweet-timestamp,\n  body.user-style-{{screen_name}} div.truncated-tweet .latest-tweet-timestamp,\n  body.user-style-{{screen_name}} a.user-stats-count span.user-stats-stat,\n  body.user-style-{{screen_name}} .welcome-steps li .active a strong,\n  body.user-style-{{screen_name}} .dashboard-activity-item-sentence span.user {\n    {{#profile_text_color}}\n      color: #{{profile_text_color}};\n    {{/profile_text_color}}\n  }\n\n  body.user-style-{{screen_name}} .dashboard .user-small-list-item .user-full-name,\n  body.user-style-{{screen_name}} span.trend-location,\n  body.user-style-{{screen_name}} .your-activity h3,\n  body.user-style-{{screen_name}} .trends-inner h3,\n  body.user-style-{{screen_name}} .dashboard .user-rec-inner h3,\n  body.user-style-{{screen_name}} .latest-tweet,\n  body.user-style-{{screen_name}} .truncated-tweet,\n  body.user-style-{{screen_name}} .latest-tweet a.latest-tweet-timestamp,\n  body.user-style-{{screen_name}} .truncated-tweet a.latest-tweet-timestamp,\n  body.user-style-{{screen_name}} .dashboard .user-small-list-item .user-meta,\n  body.user-style-{{screen_name}} .dashboard .user-small-list-item .user-meta a,\n  body.user-style-{{screen_name}} .dashboard .user-small-list-item .user-meta a s,\n  body.user-style-{{screen_name}} .social-context div,\n  body.user-style-{{screen_name}} .dashboard .dot,\n  body.user-style-{{screen_name}} .component .promo,\n  body.user-style-{{screen_name}} .component .promo a.definition,\n  body.user-style-{{screen_name}} .dashboard .user-small-list-item .dismiss,\n  body.user-style-{{screen_name}} .dashboard .user-small-list-item .ellip,\n  body.user-style-{{screen_name}} .facets-media-not-displayed .not-displayed-text,\n  body.user-style-{{screen_name}} .dashboard .copyright,\n  body.user-style-{{screen_name}} .dashboard .user-small-list-item a.icon-link,\n  body.user-style-{{screen_name}} .dashboard ul.trends li a span.icon-link,\n  body.user-style-{{screen_name}} .dashboard-activity-item-link,\n  body.user-style-{{screen_name}} .dashboard-activity-item-sentence {\n    {{#rgba_text_color}}\n      color: {{rgba_text_color}};\n    {{/rgba_text_color}}\n  }\n\n  body.user-style-{{screen_name}} #page-container,\n  body.user-style-{{screen_name}} .user-sidebar-color,\n  body.user-style-{{screen_name}} .expando-container .dashboard {\n    {{#profile_sidebar_fill_color}}\n      \n      background: #{{profile_sidebar_fill_color}};\n    {{/profile_sidebar_fill_color}}\n    {{#rgba_sidebar_color}}\n      \n      background: {{rgba_sidebar_color}};\n    {{/rgba_sidebar_color}}\n  }\n\n  body.user-style-{{screen_name}} .activity:hover .stream-item-activity-network .activity-supplement .activity-item-tweet .activity-item-tweet-content,\n  body.user-style-{{screen_name}} .hovered-stream-item .stream-item-activity-network .activity-supplement .activity-item-tweet .activity-item-tweet-content,\n  body.user-style-{{screen_name}} .dashboard .stream-item-activity-network .activity-supplement .activity-item-tweet .activity-item-tweet-content  {\n    {{#rgba_tweet_border_color}}\n      border-color: {{rgba_tweet_border_color}} !important;\n    {{/rgba_tweet_border_color}}\n  }\n\n  body.user-style-{{screen_name}} .expanding-stream-item:hover a.twitter-atreply:hover,\n  body.user-style-{{screen_name}} .expanding-stream-item.open a.twitter-atreply,\n  body.user-style-{{screen_name}} .expanding-stream-item.colorful-links a.twitter-atreply,\n  body.user-style-{{screen_name}} .expanding-stream-item:hover a.twitter-hashtag:hover,\n  body.user-style-{{screen_name}} .expanding-stream-item.open a.twitter-hashtag,\n  body.user-style-{{screen_name}} .expanding-stream-item.colorful-links a.twitter-hashtag,\n  body.user-style-{{screen_name}} .expanding-stream-item:hover a.twitter-timeline-link:hover,\n  body.user-style-{{screen_name}} .expanding-stream-item.open a.twitter-timeline-link,\n  body.user-style-{{screen_name}} .expanding-stream-item.colorful-links a.twitter-timeline-link {\n    {{#profile_link_color}}\n      color: #{{profile_link_color}} !important;\n    {{/profile_link_color}}\n  }\n\n  body.user-style-{{screen_name}} s,\n  body.user-style-{{screen_name}} .pretty-link s {\n    {{#profile_pretty_link_color}}\n      color: #{{profile_pretty_link_color}};\n    {{/profile_pretty_link_color}}\n  }\n\n  body.user-style-{{screen_name}} .dashboard s,\n  body.user-style-{{screen_name}} .dashboard .pretty-link s,\n  body.user-style-{{screen_name}} .dashboard .user-small-list-item:hover .user-meta a s {\n    {{#profile_pretty_link_sidebar_color}}\n      color: #{{profile_pretty_link_sidebar_color}};\n    {{/profile_pretty_link_sidebar_color}}\n  }\n\n  {{\u003Epill_css}}\n\u003C/style\u003E\n',
!             content: '\u003Cdiv class="content-main js-content-main breakable"\u003E\n  \u003Cdiv id="js-promptbird-below-black-bar-hook"\u003E\u003C/div\u003E\n  \u003Cdiv id="js-empty-timeline-recommendations-module-hook"\u003E\u003C/div\u003E\n  \u003Cdiv class="content-header js-stream-header"\u003E\n    {{\u003Estream_header}} \n  \u003C/div\u003E\n  \u003Cdiv class="stream js-stream-manager-container"\u003E\n    {{#rendering_on_server}}\n      {{\u003Estream_manager}}\n      \u003Cscript\u003Eif (window.ttft) window.ttft.serverRendered(\'{{page_name}}\');twttr.keynoteTTFTPing();\u003C/script\u003E\n    {{/rendering_on_server}}\n  \u003C/div\u003E\n\u003C/div\u003E\n',
!             message_notification: "{{#message}}\n\u003Cdiv data-sender-id='{{sender_screen_name}}' data-message-id=\"{{id}}\" class='notification'\u003E\n  \u003Ca class='dismiss' href='#'\u003E\u0026times;\u003C/a\u003E\n  \u003Ch1\u003ENew Message from {{{sender_screen_name}}}\u003C/h1\u003E\n  \u003Cdiv class='message-text'\u003E{{{text}}}\u003C/div\u003E\n  \u003Cdiv class=\"message-notification-reply-box\"\u003E\n    \u003Cdiv class=\"message-notification-reply-editor\"\u003E\u003C/div\u003E\n    \u003Cdiv class=\"message-notification-reply-button button\"\u003ESend\u003C/div\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n{{/message}}\n",
!             stream_loading: '\u003Cdiv class="stream-loading"\u003E\n  \u003Cdiv class="stream-end-inner"\u003E\n    \u003Cspan class="spinner" title="Loading..."\u003E\u003C/span\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n',
!             common_tweet_classes: "\n{{#is_sponsored}} promoted-tweet{{/is_sponsored}}{{#is_my_tweet}} my-tweet{{/is_my_tweet}}{{#favorited}} favorited{{/favorited}}{{#current_user_retweet}} retweeted{{/current_user_retweet}}\n",
!             tweet_user_name: "{{#user}}\n\u003Cspan class='tweet-user-name'\u003E\n  \u003Ca class='tweet-screen-name user-profile-link js-action-profile-name' data-user-id='{{id}}' href='{{profile_path}}' title='{{name}}'\u003E{{screen_name}}\u003C/a\u003E\n  \u003Cspan class='tweet-full-name'\u003E{{name}}\u003C/span\u003E\n  {{#show_follow_action}}\n    {{^is_current_user}}\n    \u003Cspan class=\"tweet-user-follow\"\u003E\n    \u003C/span\u003E\n    {{/is_current_user}}\n  {{/show_follow_action}}\n\u003C/span\u003E\n{{/user}}\n",
!             stream_tweet_expansion: '\u003Cdiv class="expanded-content js-tweet-details-dropdown"\u003E\u003C/div\u003E\n',
!             tweet_user_block: '{{#user}}\n  \u003Ca class="account-group js-account-group js-action-profile js-user-profile-link" href="{{profile_path}}" data-user-id="{{id}}"\u003E\n    \u003Cimg class="avatar js-action-profile-avatar" src="{{profile_image_url}}" alt="{{name}}"\u003E\n    \u003Cstrong class="fullname js-action-profile-name"\u003E{{name}}\u003C/strong\u003E\n    \u003Cspan\u003E\u0026rlm;\u003C/span\u003E\n    \u003Cspan class="username js-action-profile-name"\u003E\u003Cs\u003E@\u003C/s\u003E\u003Cb\u003E{{screen_name}}\u003C/b\u003E\u003C/span\u003E\n    {{#protected}}\n      \u003Ci class="sm-lock"\u003E\u003C/i\u003E\n    {{/protected}}\n  \u003C/a\u003E\n{{/user}}\n',
!             activity_modal: "\u003Cdiv id='activity-modal' style='display: none'\u003E\n  \u003Cdiv class='left-pointer'\u003E\u003C/div\u003E\n  \u003Ca class='dismiss' title=\"Hide\"\u003E\u0026times;\u003C/a\u003E\n  \u003Cp class='header'\u003E\u003Cspan class='new'\u003ENew!\u003C/span\u003E Activity and @{{current_user_screen_name}}\u003C/p\u003E\n  \u003Cp class='desc'\u003E\n      View favorites, follows, retweets and more by people you follow in \u003Cstrong\u003EActivity\u003C/strong\u003E.\n  \u003C/p\u003E\n  \u003Cp class='extra-blurb desc'\u003E\n    View your mentions, tweets that were retweeted and more in \u003Cstrong\u003E@{{current_user_screen_name}}\u003C/strong\u003E.\n  \u003C/p\u003E\n\u003C/div\u003E\n",
!             details_pane: "\u003Cdiv class=\"inner-pane\"\u003E\n  \u003Cdiv class='pane-toolbar pane-built-in'\u003E\n    {{#popable}}\n      \u003Ca class='pane-back toolbar-control' href='#'\u003E\u003Cspan\u003E\u0026larr;\u003C/span\u003E {{back_label}}\u003C/a\u003E\n    {{/popable}}\n    {{#closable}}\n      \u003Ca class='pane-close toolbar-control' href='#'\u003Eclose \u003Cspan\u003E\u0026times;\u003C/span\u003E\u003C/a\u003E\n    {{/closable}}\n    \u003Cbr style='clear: both' /\u003E\n  \u003C/div\u003E\n  \u003Cdiv class=\"pane-components\"\u003E\n    \u003Cdiv class=\"pane-components-inner\"\u003E\n    \u003C/div\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n",
!             message_drawer: '\u003Cdiv class="message {{^rendering_on_server}}{{type}}{{/rendering_on_server}}"\u003E\n  \u003Cdiv class="message-inside"\u003E\n    \u003Cspan class="message-text"\u003E{{{text}}}\u003C/span\n    \u003E{{#close_button}}\u003Ca class="dismiss" href="#"\u003E\u0026times;\u003C/a\u003E{{/close_button}}\n  \u003C/div\u003E\n\u003C/div\u003E\n',
!             pill_css: "\n.profile-style-{{screen_name}} a {\n  {{#profile_link_color}}\n    color: #{{profile_link_color}} !important;\n  {{/profile_link_color}}\n}\n\na:hover .geo-pin, body.user-style-{{screen_name}} .stream-item:hover .geo-pin {\n  background-color: #{{profile_link_color}};\n}\n",
!             stream_tweet: '{{^render_withheld}}\n\n{{#is_current_user_withheld}}\n  {{\u003Ewithheld_message}}\n{{/is_current_user_withheld}}\n\n\u003Cdiv class="tweet original-tweet js-stream-tweet js-actionable-tweet js-hover js-profile-popup-actionable js-original-tweet {{#hidden_by_activity}} sub-stream-item-hidden{{/hidden_by_activity}}{{#embedded_by_activity}} js-activity-tweet{{/embedded_by_activity}} {{\u003Ecommon_tweet_classes}} colored-links colored-actions" {{\u003Etweet_data}}\u003E\n  \u003Ci class="dogear"\u003E\u003C/i\u003E\n  \u003Cdiv class="content"\u003E\n    \u003Cdiv class="stream-item-header"\u003E\n      {{\u003Etweet_timestamp}}\n      {{#anatomy_world}}\n        \u003Cdiv class="js-open-close-tweet toggle-expansion"\u003E\n          \u003Ca class="expand-link" href="#"\u003EExpand\u003C/a\u003E\n          \u003Ca class="collapse-link" href="#"\u003EClose\u003C/a\u003E\n          \u003Cspan\u003E\u0026nbsp;\u0026middot;\u0026nbsp;\u003C/span\u003E\n        \u003C/div\u003E\n      {{/anatomy_world}}\n      {{\u003Etweet_user_block}}\n      {{^anatomy_world}}\n        {{\u003Etweet_actions}}\n      {{/anatomy_world}}\n    \u003C/div\u003E\n    \u003Cp class="js-tweet-text"\u003E{{{linkified_text}}}\u003C/p\u003E\n    \u003Cdiv class="stream-item-footer"\u003E\n      {{\u003Etweet_context}}\n      \u003Ca class="details with-icn js-details" href="#"\u003E\n        \u003Cspan class="js-icon-container"{{#place_name}} data-placename="{{place_name}}"{{/place_name}}\u003E\n          {{#is_reply}}\n            {{^anatomy_world}}\n              \u003Ci class="sm-reply"\u003E\u003C/i\u003E\n            {{/anatomy_world}}\n            {{#anatomy_world}}\n              \u003Ci class="sm-convo"\u003E\u003C/i\u003E\n            {{/anatomy_world}}\n          {{/is_reply}}\n        \u003C/span\u003E\n        \u003Cb\u003E\n          \u003Cspan class="view-open js-view-details"\u003E\n            {{#is_reply}}\n              {{^anatomy_world}}\n                In reply to {{in_reply_to_name}}\n              {{/anatomy_world}}\n              {{#anatomy_world}}\n                View conversation\n              {{/anatomy_world}}\n            {{/is_reply}}\n            {{^is_reply}}\n              {{#anatomy_world}}\n                \u003Cspan class="action-expand-container"\u003E\n                  Expand\n                \u003C/span\u003E\n              {{/anatomy_world}}\n            {{/is_reply}}\n          \u003C/span\u003E\n          \u003Cspan class="hide-open js-hide-details"\u003E\n            {{#is_reply}}Hide conversation{{/is_reply}}\n            {{^is_reply}}\n              {{#anatomy_world}}\n                \u003Cspan class="action-close-container"\u003E\n                  Close\n                \u003C/span\u003E\n              {{/anatomy_world}}\n            {{/is_reply}}\n          \u003C/span\u003E\n        \u003C/b\u003E\n      \u003C/a\u003E\n      {{#anatomy_world}}\n        {{\u003Etweet_actions}}\n      {{/anatomy_world}}\n    \u003C/div\u003E\n    {{\u003Estream_tweet_expansion}}\n  \u003C/div\u003E\n\u003C/div\u003E\n{{/render_withheld}}\n{{#render_withheld}}\n  {{\u003Estream_tweet_withheld}}\n{{/render_withheld}}\n',
!             tweet_source: '\u003Cspan class="tweet-source"\u003Evia {{{source}}}\u003C/span\u003E\n',
!             tweet_text: '\u003Cdiv class="tweet-text js-tweet-text"\u003E{{{linkified_text}}}\u003C/div\u003E\n',
!             stream_tweet_withheld: '\u003Cdiv class="tweet original-tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable js-original-tweet {{#hidden_by_activity}} sub-stream-item-hidden{{/hidden_by_activity}}{{#embedded_by_activity}} js-activity-tweet{{/embedded_by_activity}} {{\u003Ecommon_tweet_classes}}" {{\u003Etweet_data}}\u003E\n  \u003Ci class="dogear"\u003E\u003C/i\u003E\n  \u003Cdiv class="content"\u003E\n    \u003Cdiv class="stream-item-header"\u003E\n      \u003Ca class="account-group"\u003E\n        \u003Cstrong class="fullname"\u003ETweet withheld\u003C/strong\u003E\n      \u003C/a\u003E\n      {{\u003Etweet_timestamp}}\n    \u003C/div\u003E\n    \u003Cp class="js-tweet-text"\u003E{{{linkified_text}}}\u003C/p\u003E\n    \u003Cdiv class="stream-item-footer"\u003E\n      {{\u003Etweet_context}}\n    \u003C/div\u003E\n    {{\u003Estream_tweet_expansion}}\n  \u003C/div\u003E\n\u003C/div\u003E\n',
!             tweet_dogear: '\u003Cdiv class="tweet-dogear"\u003E\u003C/div\u003E\n',
!             tweet_meta: "\u003Cdiv class='tweet-meta'\u003E\n  \u003Cspan class='icons'\u003E\n    {{#is_sponsored}}\n      {{#retweet_count}}\n        \u003Cspan class='retweet-icon'\u003E\u003C/span\u003E \u003Cem\u003E{{retweet_count_text}}\u003C/em\u003E\n      {{/retweet_count}}\n    {{/is_sponsored}}\n\n    {{^decider_activity_read}}\n      {{^is_sponsored}}\n        {{#was_retweeted}}\n          {{#retweeting_status}}\n            \u003Cspan class='retweet-icon'\u003E\u003C/span\u003E {{#user}}\u003Cem\u003Eby {{screen_name}}\u003C/em\u003E{{/user}}\n          {{/retweeting_status}}\n        {{/was_retweeted}}\n      {{/is_sponsored}}\n    {{/decider_activity_read}}\n\n    \u003Cdiv class=\"extra-icons\"\u003E\n      {{^can_expand}}\n        {{#is_reply}}\n          \u003Cspan class='reply-icon icon js-reply-notice'\u003E@\u003C/span\u003E\n        {{/is_reply}}\n        \u003Cspan class=\"inlinemedia-icons js-icon-container\"\u003E\u003C/span\u003E\n        {{#show_geo_icon}}\u003Cspan class=\"geo-pin\"\u003E\u003C/span\u003E{{/show_geo_icon}}\n      {{/can_expand}}\n      {{#can_expand}}\n        {{\u003Etweet_timestamp}}\n      {{/can_expand}}\n    \u003C/div\u003E\n  \u003C/span\u003E\n\u003C/div\u003E\n\n{{#can_expand}}\n  {{\u003Etweet_actions}}\n{{/can_expand}}\n",
!             tweet_timestamp: '\u003Csmall class="time"\u003E\n    \u003Ca href="{{permalink_path}}" class="tweet-timestamp js-permalink" title="{{explicit_timestamp}}"\u003E\u003Cspan class="_timestamp js-short-timestamp {{#is_relative_timestamp}}js-relative-timestamp{{/is_relative_timestamp}}" data-time="{{actual_timestamp}}" data-long-form="true"\u003E{{short_timestamp}}\u003C/span\u003E\u003C/a\u003E\n\u003C/small\u003E\n'
          })
      }
      A();
***************
*** 13013,13019 ****
                  return S.length != 0 && R.length / S.length > 0.3
              }
              Q.name = twttr.anywhere.api.util.sanitize(Q.name);
!             if (Q.name && twttr.i18n && twttr.i18n.rtl) {
                  var O = Q.name.match(twttr.constants.regexps.rtlChar);
                  if (!O || !N(Q.name, O)) {
                      Q.name = "\u202a" + Q.name + "\u202c"
--- 10666,10672 ----
                  return S.length != 0 && R.length / S.length > 0.3
              }
              Q.name = twttr.anywhere.api.util.sanitize(Q.name);
!             if (Q.name && twttr.isRTL) {
                  var O = Q.name.match(twttr.constants.regexps.rtlChar);
                  if (!O || !N(Q.name, O)) {
                      Q.name = "\u202a" + Q.name + "\u202c"
***************
*** 16111,16171 ****
          }
          B.prototype = {
              show: function () {
!                 var G = this.getTitle();
!                 if (G && this.enabled) {
!                     var F = this.tip();
!                     F.find(".tipsy-inner")[this.options.html ? "html" : "text"](G);
!                     F[0].className = "tipsy";
!                     F.remove().css({
                          top: 0,
                          left: 0,
                          visibility: "hidden",
                          display: "block"
                      }).appendTo(document.body);
!                     var J = C.extend({}, this.$element.offset(), {
                          width: this.$element[0].offsetWidth,
                          height: this.$element[0].offsetHeight
                      });
!                     var D = F[0].offsetWidth,
!                         I = F[0].offsetHeight;
!                     var H = (typeof this.options.gravity == "function") ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
!                     var E;
!                     switch (H.charAt(0)) {
                      case "n":
!                         E = {
!                             top: J.top + J.height + this.options.offset,
!                             left: J.left + J.width / 2 - D / 2
                          };
                          break;
                      case "s":
!                         E = {
!                             top: J.top - I - this.options.offset,
!                             left: J.left + J.width / 2 - D / 2
                          };
                          break;
!                     case "e":
!                         E = {
!                             top: J.top + J.height / 2 - I / 2,
!                             left: J.left - D - this.options.offset
                          };
                          break;
!                     case "w":
!                         E = {
!                             top: J.top + J.height / 2 - I / 2,
!                             left: J.left + J.width + this.options.offset
                          };
                          break
                      }
!                     if (H.length == 2) {
!                         if (H.charAt(1) == "w") {
!                             E.left = J.left + J.width / 2 - 15
                          } else {
!                             E.left = J.left + J.width / 2 - D + 15
                          }
                      }
!                     F.css(E).addClass("tipsy-" + H);
                      if (this.options.fade) {
!                         F.stop().css({
                              opacity: 0,
                              display: "block",
                              visibility: "visible"
--- 13764,13832 ----
          }
          B.prototype = {
              show: function () {
!                 var H = this.getTitle();
!                 if (H && this.enabled) {
!                     var G = this.tip();
!                     G.find(".tipsy-inner")[this.options.html ? "html" : "text"](H);
!                     G[0].className = "tipsy";
!                     G.remove().css({
                          top: 0,
                          left: 0,
                          visibility: "hidden",
                          display: "block"
                      }).appendTo(document.body);
!                     var K = C.extend({}, this.$element.offset(), {
                          width: this.$element[0].offsetWidth,
                          height: this.$element[0].offsetHeight
                      });
!                     var E = G[0].offsetWidth,
!                         J = G[0].offsetHeight;
!                     var I = (typeof this.options.gravity == "function") ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
! 
!                     function D(L) {
!                         if (twttr.isRTL) {
!                             return L === "e" ? "w" : "e"
!                         } else {
!                             return L
!                         }
!                     }
!                     var F;
!                     switch (I.charAt(0)) {
                      case "n":
!                         F = {
!                             top: K.top + K.height + this.options.offset,
!                             left: K.left + K.width / 2 - E / 2
                          };
                          break;
                      case "s":
!                         F = {
!                             top: K.top - J - this.options.offset,
!                             left: K.left + K.width / 2 - E / 2
                          };
                          break;
!                     case D("e"):
!                         F = {
!                             top: K.top + K.height / 2 - J / 2,
!                             left: K.left - E - this.options.offset
                          };
                          break;
!                     case D("w"):
!                         F = {
!                             top: K.top + K.height / 2 - J / 2,
!                             left: K.left + K.width + this.options.offset
                          };
                          break
                      }
!                     if (I.length == 2) {
!                         if (I.charAt(1) == D("w")) {
!                             F.left = K.left + K.width / 2 - 15
                          } else {
!                             F.left = K.left + K.width / 2 - E + 15
                          }
                      }
!                     G.css(F).addClass("tipsy-" + I);
                      if (this.options.fade) {
!                         G.stop().css({
                              opacity: 0,
                              display: "block",
                              visibility: "visible"
***************
*** 16173,16185 ****
                              opacity: this.options.opacity
                          })
                      } else {
!                         F.css({
                              visibility: "visible",
                              opacity: this.options.opacity
                          })
                      }
                      if (this.options.className) {
!                         F.addClass(this.options.className)
                      }
                  }
              },
--- 13834,13846 ----
                              opacity: this.options.opacity
                          })
                      } else {
!                         G.css({
                              visibility: "visible",
                              opacity: this.options.opacity
                          })
                      }
                      if (this.options.className) {
!                         G.addClass(this.options.className)
                      }
                  }
              },
***************
*** 17192,17198 ****
                  userSearchPath: /(\/(who_to_follow|welcome)\/search\/|\/search\/users\/)([^\/]+)/,
                  email: /^[\w-]+([^@,\s\<\>\(\)]*[\w-]+)?\@[\w-]+(\.[\w-]+)*\.[a-z]{2,}$/i,
                  rtlChar: /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/mg,
!                 dirMark: /\u200e|\u200f/mg
              },
              recaptcha: {
                  srcUrl: twttr.recaptchaUrlForTest || "https://www.google.com/recaptcha/api/js/recaptcha_ajax.js",
--- 14853,14860 ----
                  userSearchPath: /(\/(who_to_follow|welcome)\/search\/|\/search\/users\/)([^\/]+)/,
                  email: /^[\w-]+([^@,\s\<\>\(\)]*[\w-]+)?\@[\w-]+(\.[\w-]+)*\.[a-z]{2,}$/i,
                  rtlChar: /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/mg,
!                 dirMark: /\u200e|\u200f/mg,
!                 rtlHashtag: /^#.*([\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF])+/mg
              },
              recaptcha: {
                  srcUrl: twttr.recaptchaUrlForTest || "https://www.google.com/recaptcha/api/js/recaptcha_ajax.js",
***************
*** 17905,17911 ****
          }).statics({
              AB_TEST_SCRIBE_CATEGORY: "www_ab_testing",
              AB_IMPRESSION_EVENT: "ab_test_impression",
-             AB_TEST_IMPRESSION_CLIENT_EVENT: "web:ddg:::experiment",
              ABDECIDER_URL: "/account/available_ab_buckets",
              LOG_EVENTS: false,
              DEFAULT_REFRESH_INTERVAL: -1
--- 15567,15572 ----
***************
*** 17983,18007 ****
              remove: function (C) {
                  this._experiments[C] = null
              },
!             _trackInternal: function (C, E, D) {
                  if (!this._experiments) {
                      return
                  }
!                 var F = this._experiments[C];
!                 if (!F) {
                      return
                  }
!                 var G = twttr.merge(D || {}, {
!                     bucket: F.bucket,
!                     experiment_key: F.experiment_key,
!                     version: F.version
                  });
                  if (this.constructor.LOG_EVENTS) {
!                     console.log(C + ": " + E)
                  }
!                 scribble(E, G, twttr.AbDecider.AB_TEST_SCRIBE_CATEGORY);
!                 if (twttr.decider.isAvailable("abdecider_new_impression_logging") && E == this.constructor.AB_IMPRESSION_EVENT) {
!                     scribble(twttr.AbDecider.AB_TEST_IMPRESSION_CLIENT_EVENT, G, "client_event")
                  }
              }
          });
--- 15644,15674 ----
              remove: function (C) {
                  this._experiments[C] = null
              },
!             _trackInternal: function (E, G, F) {
                  if (!this._experiments) {
                      return
                  }
!                 var H = this._experiments[E];
!                 if (!H) {
                      return
                  }
!                 var I = twttr.merge(F || {}, {
!                     bucket: H.bucket,
!                     experiment_key: H.experiment_key,
!                     version: H.version
                  });
                  if (this.constructor.LOG_EVENTS) {
!                     console.log(E + ": " + G)
                  }
!                 scribble(G, I, twttr.AbDecider.AB_TEST_SCRIBE_CATEGORY);
!                 if (twttr.decider.isAvailable("abdecider_new_impression_logging")) {
!                     if (G == this.constructor.AB_IMPRESSION_EVENT) {
!                         scribble("web:ddg:" + H.experiment_key + "::experiment", I, "client_event")
!                     } else {
!                         var D = G.replace(/[^0-9A-Z]+/gi, "_").toLowerCase();
!                         var C = "web:ddg:" + H.experiment_key + "::" + D + ":track";
!                         scribble(C, I, "client_event")
!                     }
                  }
              }
          });
***************
*** 20447,20457 ****
--- 18114,18126 ----
                          this.updateExpandoControl(true, P);
                          N.exitExpandedState(Q, S);
                          N.simpleShowHideContent(true, Q.find("div.js-expando-content"));
+                         O.trigger("simpleExpandoContract");
                          this.openCount += -1
                      } else {
                          this.updateExpandoControl(false, P);
                          N.enterExpandedState(Q, S);
                          N.simpleShowHideContent(false, Q.find("div.js-expando-content"));
+                         O.trigger("simpleExpandoExpand");
                          this.openCount += 1
                      }
                      this.showHideCloseAllButton()
***************
*** 20652,20658 ****
                          G.scribeData.item_details = D
                      }
                      this.getScribbler().scribe(F, twttr.merge(H, G.scribeData));
!                     twttr.abdecider.track("replies_stripped_on_verified_profiles_200", I);
                      this._itemDetailsScribe(I, G.itemType, G.itemObj)
                  },
                  _itemDetailsScribe: function (J, H, E) {
--- 18321,18329 ----
                          G.scribeData.item_details = D
                      }
                      this.getScribbler().scribe(F, twttr.merge(H, G.scribeData));
!                     if (twttr.profileUser && twttr.profileUser.verified) {
!                         twttr.abdecider.track("replies_stripped_on_verified_profiles_200", I)
!                     }
                      this._itemDetailsScribe(I, G.itemType, G.itemObj)
                  },
                  _itemDetailsScribe: function (J, H, E) {
***************
*** 22637,22642 ****
--- 20308,20324 ----
                      }
                      var G = this.getMachedRtlChars(F.text());
                      if (G != undefined) {
+                         F.find(".twitter-hashtag").each(function () {
+                             var J = $(this).attr("title");
+                             if (!J) {
+                                 return
+                             }
+                             if (J.match(twttr.constants.regexps.rtlHashtag)) {
+                                 $(this).html("\u202b" + $(this).html() + "\u202a")
+                             } else {
+                                 $(this).html("\u202c" + $(this).html() + "\u202a")
+                             }
+                         });
                          if (this.shouldBeRTL(F.text(), G)) {
                              F.addClass("tweet-text-rtl");
                              F.html(F.html().replace(C, "\u200E$1\u200F"));
***************
*** 29472,29479 ****
          A(C)
      })
  });
! provide("bundle/t1-hogan-core", function (A) {
!     using(["$lib/jquery-1.7.1.js", "libwrap/jquery", "$lib/json2.js", "libwrap/json", "$lib/hogan.js", "libwrap/hogan", "run/base", "_", "/account/templates_t1_core.js", "EventProvider", "bluejs/init", "bluejs/config/endpoints", "bluejs/util/request_helpers", "bluejs/util/local_storage_cache", "bluejs/util/object_cache", "bluejs/util/request_cache", "bluejs/util/helpers", "bluejs/util/model", "bluejs/util/remote_request", "bluejs/util/base_collection", "bluejs/mixins/status_actions", "bluejs/mixins/phoenix/user", "bluejs/mixins/phoenix/current_user", "bluejs/mixins/phoenix/status", "bluejs/mixins/phoenix/rate_user_recommendation", "bluejs/models/base", "bluejs/models/user", "bluejs/models/direct_message", "bluejs/models/saved_search", "bluejs/models/list", "bluejs/models/location", "bluejs/models/trend", "bluejs/models/status", "bluejs/models/promptbird", "bluejs/models/search_result", "bluejs/models/place", "bluejs/models/user_recommendation", "bluejs/models/suggestion_category", "bluejs/models/related_tweets", "bluejs/models/related_result", "bluejs/util/promoted_content", "bluejs/models/address_book", "bluejs/models/promo", "bluejs/models/urls", "bluejs/models/blob", "bluejs/models/device", "bluejs/models/download", "bluejs/models/search", "bluejs/models/conversation", "bluejs/models/activity", "bluejs/models/topic_story", "bluejs/models/news_article", "bluejs/models/news_story", "bluejs/models/user_story", "bluejs/models/tweet_story", "bluejs/models/story", "bluejs/models/search_story", "bluejs/models/stories", "bluejs/models/discovery", "bluejs/models/sports_story", "bluejs/models/soccer_events", "bluejs/models/social_proof", "extendAPI", "bluejs/api", "$lib/jquery.color.js", "$lib/modernizr-1.5.js", "$lib/jquery.hashchange.js", "$lib/jquery.cookie.js", "$lib/jquery.tipsy.js", "$lib/jquery.cssanimation.js", "IFrame", "util", "constants", "cache", "singletons/namespaced_store", "singletons/promoted_account_store", "singletons/promoted_tweet_store", "decider", "multiGlobals/scribble", "abdecider", "app", "singletons/external_url_store", "singletons/Router", "streams/Stream", "scribbles", "multiGlobals/client_app_tracking", "mixins/streamablePageDetailsPane", "mixins/streamablePageDropdownEdition", "mixins/itemActionableScribing", "mixins/streamablePage", "mixins/userActionableT1", "mixins/userActionable", "mixins/profilePopupActionable", "mixins/listActionable", "mixins/tweetActionable", "mixins/pendingActions", "mixins/i18nTweet", "mixins/i18nTweetBox", "mixins/promotedTweetStream", "mixins/componentEvents", "mixins/protectedUserActionable", "mixins/serverRenderableObject", "mixins/welcomeScribing", "mixins/t1/emptyTimelineRecommendations", "lib/natcompare", "$lib/twitter-text-1.4.16.js", "setup", "search", "helpers", "errors", "viewHelpers", "components/Base", "idleDetector", "interface", "run/topbarDropdown", "tco", "streams/TweetStream", "streams/Home", "streams/StreamManager", "view", "urlResolver", "multiGlobals/core_views", "multiGlobals/core_views_t1", "router_t1", "audit", "multiGlobals/ClickTrail", "run/defaultViews", "TrendLocations", "mixins/sideNavigationT1", "components/PagePromise", "components/Page", "components/pages/mixins/homeT1", "components/pages/Home", "themes", "Profiler"], function () {
          A()
      })
  });
\ No newline at end of file
--- 27154,27161 ----
          A(C)
      })
  });
! provide("bundle/t1-core", function (A) {
!     using(["$lib/jquery-1.7.1.js", "libwrap/jquery", "$lib/json2.js", "libwrap/json", "$lib/mustache.js", "libwrap/mustache", "run/base", "_", "/account/templates_t1_core.js", "EventProvider", "bluejs/init", "bluejs/config/endpoints", "bluejs/util/request_helpers", "bluejs/util/local_storage_cache", "bluejs/util/object_cache", "bluejs/util/request_cache", "bluejs/util/helpers", "bluejs/util/model", "bluejs/util/remote_request", "bluejs/util/base_collection", "bluejs/mixins/status_actions", "bluejs/mixins/phoenix/user", "bluejs/mixins/phoenix/current_user", "bluejs/mixins/phoenix/status", "bluejs/mixins/phoenix/rate_user_recommendation", "bluejs/models/base", "bluejs/models/user", "bluejs/models/direct_message", "bluejs/models/saved_search", "bluejs/models/list", "bluejs/models/location", "bluejs/models/trend", "bluejs/models/status", "bluejs/models/promptbird", "bluejs/models/search_result", "bluejs/models/place", "bluejs/models/user_recommendation", "bluejs/models/suggestion_category", "bluejs/models/related_tweets", "bluejs/models/related_result", "bluejs/util/promoted_content", "bluejs/models/address_book", "bluejs/models/promo", "bluejs/models/urls", "bluejs/models/blob", "bluejs/models/device", "bluejs/models/download", "bluejs/models/search", "bluejs/models/conversation", "bluejs/models/activity", "bluejs/models/topic_story", "bluejs/models/news_article", "bluejs/models/news_story", "bluejs/models/user_story", "bluejs/models/tweet_story", "bluejs/models/story", "bluejs/models/search_story", "bluejs/models/stories", "bluejs/models/discovery", "bluejs/models/sports_story", "bluejs/models/soccer_events", "bluejs/models/social_proof", "extendAPI", "bluejs/api", "$lib/jquery.color.js", "$lib/modernizr-1.5.js", "$lib/jquery.hashchange.js", "$lib/jquery.cookie.js", "$lib/jquery.tipsy.js", "$lib/jquery.cssanimation.js", "IFrame", "util", "constants", "cache", "singletons/namespaced_store", "singletons/promoted_account_store", "singletons/promoted_tweet_store", "decider", "multiGlobals/scribble", "abdecider", "app", "singletons/external_url_store", "singletons/Router", "streams/Stream", "scribbles", "multiGlobals/client_app_tracking", "mixins/streamablePageDetailsPane", "mixins/streamablePageDropdownEdition", "mixins/itemActionableScribing", "mixins/streamablePage", "mixins/userActionableT1", "mixins/userActionable", "mixins/profilePopupActionable", "mixins/listActionable", "mixins/tweetActionable", "mixins/pendingActions", "mixins/i18nTweet", "mixins/i18nTweetBox", "mixins/promotedTweetStream", "mixins/componentEvents", "mixins/protectedUserActionable", "mixins/serverRenderableObject", "mixins/welcomeScribing", "mixins/t1/emptyTimelineRecommendations", "lib/natcompare", "$lib/twitter-text-1.4.16.js", "setup", "search", "helpers", "errors", "viewHelpers", "components/Base", "idleDetector", "interface", "run/topbarDropdown", "tco", "streams/TweetStream", "streams/Home", "streams/StreamManager", "view", "urlResolver", "multiGlobals/core_views", "multiGlobals/core_views_t1", "router_t1", "audit", "multiGlobals/ClickTrail", "run/defaultViews", "TrendLocations", "mixins/sideNavigationT1", "components/PagePromise", "components/Page", "components/pages/mixins/homeT1", "components/pages/Home", "themes", "Profiler"], function () {
          A()
      })
  });
\ No newline at end of file
