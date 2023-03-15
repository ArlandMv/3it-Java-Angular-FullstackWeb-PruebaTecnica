# Angular y Spring Boot STACK
Este repositorio contiene el esqueleto de proyecto para un frontend Angular y un backend Spring Boot. Está diseñado para servir como punto de partida para nuevos proyectos que requieran combinación de tecnologías especificamente acompañadas con bases de datos MySQL.

## 1-Requisitos y Variables de Entorno

Asegurese de verificar los requisitos mínimos señalados mediante los comandos y que las variables de entorno esten configuradas adecuadamente. 

**Node.js** v14 o superior instalado `node -v`
    
    Puede descargarlo desde el sitio web oficial en [NodeJs.Org](https://nodejs.org/en/).
    
**Java** 1.8 instalado `java -version`

    Puede descargar Java 1.8 desde el sitio web oficial en [www.oracle.com](https://www.oracle.com/java/technologies/javase-jre8-downloads.html).


**Maven** 3.X.X instalado `mvn -version`

    Puede descargar Binario apache-maven-x.x.x-bin.zip desde el sitio web oficial en [maven.apache.org](https://maven.apache.org/download.cgi).


Para que el programa funcione correctamente, debe configurar las siguientes **variables de entorno** de Java y Maven:

`JAVA_HOME`: La ruta de Java. Ej: C:\Program Files\Java\jdk1.8.0_351
`MAVEN_HOME`: La ruta de Maven. Ej: C:\Program Files\Maven\apache-maven-3.9.0

`PATH`: Agregar la ruta de las carpetas `bin` al PATH.
- %JAVA_HOME%\bin
- %MAVEN_HOME%\bin 

## 2-Instalación de tecnologias Frontend y Backwend

### 2.1-Frontend: Angular 11 (IDE recomendado: Visual Studio Code)

En una ventana de terminal ejecute las siguientes instruccion para instalar:
`npm install -g @angular/cli@11`.  
Alternativamente verifique usando: `ng --version`

### 2.2-Backend: 

Instale el IDE de su preferencia, se sugiere Spring tool suite o alternativamente IntelliJ IDEA, no obstante se requiere crear una base de datos y tabla en MySQL Workbench 8.

**Script for MySQL Workbench 8.**

```sql 
    CREATE DATABASE my_database;
    
    USE my_database;

    CREATE TABLE people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    area VARCHAR(255) NOT NULL
    );
```

**Instalación de IntelliJ IDEA.**

1. Descargue [IntelliJ IDEA](https://www.jetbrains.com/idea/download) desde el sitio web oficial de JetBrains.
2. Seleccione la descarga de acuerdo a su sistema operativo.
3. Una vez descargado el archivo, haga doble clic en él para iniciar el instalador.
4. Siga las instrucciones en pantalla para completar la instalación de IntelliJ IDEA.
5. Después de la instalación, abra IntelliJ IDEA y configure sus preferencias iniciales según sea necesario.

Después de completar estos pasos, debería tener IntelliJ IDEA instalado en su sistema y estar listo para comenzar a desarrollar con Java.


**Instalación de Spring Tool Suite** (Alternativamente)

1. Descargue la última versión de [Spring Tool Suite](https://spring.io/tools) desde la página de descarga oficial.
2. Descomprima el archivo ZIP en la carpeta deseada.
3. Ejecute Spring Tool Suite y verifique que se haya instalado correctamente.

Después de completar estos pasos, debería tener Spring Tool Suite instalado en su sistema y estar listo para comenzar a desarrollar con Java.


## Ejecutar localmente 


**Preparar Backend**
```bash 
    cd [carpeta de backend]
    `mvn spring-boot:run`
    echo 'correr springboot'
```
verificar api en explorador: `http://localhost:8080/api/v1/`

**Install my-project with npm**

```bash
  git clone https://github.com/ArlandMv/angular-springboot-starter
  cd angular-springboot-starter
  cd frontend
  npm install
  ng serve -o
```
    
## Deployment

To deploy this project run


- **Clonar el repositorio:** Clona este repositorio en tu máquina local usando Git.

- **Construir y ejecutar el backend de Spring Boot:** En el directorio `spring-boot-project`, ejecuta el siguiente comando en tu terminal: `mvn spring-boot:run`

- **Construir y ejecutar el frontend de Angular:** En el directorio `angular-project`, ejecuta el siguiente comando en tu terminal: `ng serve`

- **Abrir la aplicación en tu navegador:** Abre tu navegador y navega a `http://localhost:4200` para ver la aplicación Angular en acción.

¡Eso es todo! Ahora deberías tener una aplicación Angular y Spring Boot funcionando.

```bash
  npm run deploy
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

