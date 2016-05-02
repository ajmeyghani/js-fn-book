# Book Starter Boilerplate

This is a boilerplate that you can use to self-publish books on Epub. In addition to that, you'll get outputs in all possible formats that you can distribute anywhere, including the Amazon Kindle.

## Requirements

- node > 0.12.0 (you use [nvm](https://github.com/creationix/nvm) to manage your node versions)

- Electron-pdf, bookly: `npm i electron-pdf bookly -g`

- [Pandoc](http://pandoc.org/installing.html)

- Amazon [KindleGen](https://www.amazon.com/gp/feature.html?docId=1000765211)

- [Python](https://github.com/yyuu/pyenv) (for some pandoc filters)

- PhantomJS (for making pdfs from html chapters):

    ```
    # Windows (MSVC 2013), 64-bit, for Windows Vista or later, bundles VC++ Runtime 2013
    $ curl -L http://astefanutti.github.io/decktape/downloads/phantomjs-msvc2013-win64.exe -o bin\phantomjs.exe
    # Mac OS X (Cocoa), 64-bit, for OS X 10.6 or later
    $ curl -L http://astefanutti.github.io/decktape/downloads/phantomjs-osx-cocoa-x86-64 -o bin/phantomjs
    # Linux (CentOS 6), 64-bit
    $ curl -L http://astefanutti.github.io/decktape/downloads/phantomjs-linux-centos6-x86-64 -o bin/phantomjs
    # Linux (CentOS 7), 64-bit
    $ curl -L http://astefanutti.github.io/decktape/downloads/phantomjs-linux-centos7-x86-64 -o bin/phantomjs
    # Linux (Debian 8), 64-bit
    $ curl -L http://astefanutti.github.io/decktape/downloads/phantomjs-linux-debian8-x86-64 -o bin/phantomjs
    ```

- [LaTeX](http://miktex.org/download) (for building pdf)


## Configuration Files

- Update the content of `book.txt`, to include the title and the author. This is for LeanPub.
- In the `book-lean.txt` file include the chapters that you want to be included one chapter per line. This is for LeanPub publishing chapters.
- Update the input, output, and output file names in `config.js`. This is for Bookly.

## Building the book

- `./full-build.sh`: runs all the scripts. Take a look at the script for more details.
    - `./build.sh`: just builds the book in different formats and put them in the output folder.
    - `./lean.sh`: this script builds the book for LeanPub
