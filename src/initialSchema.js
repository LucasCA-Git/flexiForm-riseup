// src/initialSchema.js

export const initialSchema = {
  "title": "Formulário de Cadastro com Regras de Validação",
  "description": "Exemplo simples de formulário demonstrando campos obrigatórios, tamanho mínimo e padrões de formato.",
  "type": "object",
  "required": [
    "nome",
    "sobrenome",
    "email"
  ],
  "properties": {
    "nome": {
      "type": "string",
      "title": "Nome",
      "default": "Carlos",
      "minLength": 2, 
      "description": "Deve ter pelo menos 2 caracteres." 
    },
    "sobrenome": {
      "type": "string",
      "title": "Sobrenome"
    },
    "email": {
      "type": "string",
      "title": "Endereço de E-mail",
      "format": "email", 
      "description": "Por favor, insira um endereço de e-mail válido."
    },
    "idade": { 
      "type": "integer",
      "title": "Idade",
      "minimum": 18, 
      "description": "Idade mínima para cadastro é 18 anos." 
    },
    "bio": {
      "type": "string",
      "title": "Biografia"
    },
    "senha": { 
      "type": "string",
      "title": "Senha",
      "minLength": 8, 
      "description": "A senha deve ter no mínimo 8 caracteres." 
    },
    "telefone": { 
      "type": "string",
      "title": "Telefone (Somente Números)",
      "minLength": 10,
      "pattern": "^[0-9]*$", 
      "description": "Formato: 10 dígitos, somente números (Ex: 1234567890)."
    }
  }
};