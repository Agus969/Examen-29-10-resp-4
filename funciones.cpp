#include <iostream>
//#include <cstdlib>
//#include <cstring>
#include <fstream>
#include <string>
#include <vector>
//#include <windows.h>
//#include <lm.h>
//#pragma comment(lib, "Netapi32.lib")
using namespace std;



void agregarNumero(const std::string &numero) {
    std::ofstream archivo("numeros.txt", std::ios::app);
    if (archivo.is_open()) {
        archivo << numero << std::endl; // Escribir número en el archivo
        archivo.close();
    }
}

std::vector<std::string> cargarNumeros() {
    std::vector<std::string> numeros;
    std::ifstream archivo("numeros.txt");
    std::string numero;

    while (std::getline(archivo, numero)) {
        numeros.push_back(numero);
    }

    archivo.close();
    return numeros;
}

void resetearRegistro() {
    std::ofstream archivo("numeros.txt", std::ios::trunc); // Truncar a cero
    archivo.close();
}

int main() {
    return 0;
}


