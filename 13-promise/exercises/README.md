# Feladatok

1. Írj egy függvényt, `convertToUppercase()` néven, mely paraméterként kap egy tömböt. A függvény visszatérési érték egy Promise.  
Amennyiben a tömb minden eleme string, és sikeresen nagybetűssé alakíthatók a Promise resolved lesz és visszaad egy új tömböt, ami az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.  
Ellenkező esetben a Promise rejected lesz, a visszatérési érték a következő string: 'Error: Not all items in the array are strings!'

2. Írj egy másik függvényt `sortStrings()` néven, mely paraméterként egy tömböt kap. A függvény visszatérési érték egy Promise.  
A Promise resolved lesz, amennyiben a tömb minden eleme string, a resolved value az ABC szerinti rendezett tömb.  
Ha nem minden elem string, akkor a Promise rejected lesz, az Error objektum üzenet szövege:     
'Error: Not all items in the array are strings!'   
Ha a sorba rendezés során hiba történik akkor is rejected lesz a Promise, az Error objektum üzenet szövege ebben az esetben:  
'Error: Something went wrong with sorting words.'
