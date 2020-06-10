# Instalação
## Clonando o Repositório
Clone o repositório em uma pasta de sua preferência

## Instalando Dependências
### Pipenv
Instalar o pipenv, que gerencia as dependências do projeto.

Caso esteja no MacOS brew install pipenv
```brew install pipenv```

Caso esteja usando Debian Buster+
```sudo apt install pipenv```

Caso esteja usando Fedora
```sudo dnf install pipenv```

Caso esteja usando FreeBSD
```pkg install py36-pipenv```

Caso contrário
```pip install pipenv```

### NPM
Instalar o npm, que gerenria as dependências do frontend
Rode o commando ```npm install -g @angular/cli```

### Iniciando o projeto
Rode o pipenv na raíz do projeto onde estão os arquivos Pipfile e Pipfile.lock com o comando ```pipenv install```

Isso irá instalar todas as dependência internas do projeto

Inicie o virtualenv do pipenv com o comando ```pipenv shell```

Vá para a pasta raíz da aplicação em ```meuq```

Atualize as migrações padrões do django através do comando ```python manage.py migrate```

Inicie o servidor do projeto com o comando ```python manage.py runserver```

Vá para a pasta ```frontend```

Rode o comando ```npm install``` para instalar as dependências de front

Rode o comando ```ng serve``` para rodar o servidor do frontend

Para desativar o pipenv basta usar o comando ```exit``` ou ```Ctrl+d```

### Acessando o projeto

#### http://127.0.0.1:4200/signup
Cria um usuário para acessar a aplicação

### http://127.0.0.1:4200/
Acessa a aplicação através de um login
Clique no X para remover um usuário
Use o formulário para criar um outro usuário
A lista de usuários aparece acima do formulário
