1. Instalar Node.js , Instalar Python 

2. g++ -o cgi-bin/funciones.cgi cgi-bin/funciones.cpp -lnetapi32

3. python -m http.server --cgi 8000
   python -m http.server

4. http://localhost:8000/


ShellExcute
para probar directo (con librería netapi32.lib)

g++ nuevoUsuario.cpp -o nuevoUsuario.exe -lnetapi32
g++ eliminaUsuario.cpp -o eliminaUsuario.exe -lnetapi32


para compilar el createProces 
g++ -\cgi-bin\*.cpp -o \cgi-bin\funciones.exe

mingw32-make


