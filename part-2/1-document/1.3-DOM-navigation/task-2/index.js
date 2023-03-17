// Если elem – произвольный узел DOM-элемента…

/* 1. Правда, что elem.lastChild.nextSibling всегда равен null? */

// Правда, так как elem.lastChild всегда последний

/* 2. Правда, что elem.children[0].previousSibling всегда равен null ?*/

// Неправда, так как перед elem.children[0].previousSibling может быть, например, текстовый узел
