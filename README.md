# test-nodejs
Primer prueba de nodejs


# ejecutar mongodb automáticamente en windows

1. Instalamos MongoDB
2. Agregamos la ruta a las variables de entorno  Ej. (C:\Program Files\MongoDB\Server\3.0\bin)
3. Abrimos una consola como administrador
4. ejecutamos el siguiente comando 
	'mongod --dbpath "c:\mymongodb" --logpath "c:\mymongodb\logs.txt" --install --serviceName "MongoDB" '
5. verificamos que el servicio esté creado  y lo ejecutamos automáticamente si aún no está así