all:
	g++ funciones.cpp -o funciones
	mv funciones.exe funciones
#	python -m http.server 
#	cmd /c start http://localhost:$(PUERTO)





#EJECUTABLE = .\cgi-bin\funciones.cgi
#ARCHIVOS = .\cgi-bin\funciones.cpp 
#LIBRERIAS= -lnetapi32
#LIBRERIAS = -L. -lsqlite3
#PUERTO = 8000

#all: elimina compila abre_navegador abre_servidor

#elimina:
#	del $(EJECUTABLE)

#compila: $(ARCHIVOS)
#	g++ -o $(EJECUTABLE) $(ARCHIVOS) $(LIBRERIAS)

# ya no hacemos esto
#ejecuta:
#	$(EJECUTABLE)

#abre_servidor:
#	python -m http.server --cgi $(PUERTO)

#abre_navegador:
#	cmd /c start http://localhost:$(PUERTO)
