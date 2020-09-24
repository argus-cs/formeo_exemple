const editorContainer = document.getElementById("editor");

// opções do editor
const options = {
  editorContainer,
  sessionStorage: true,
  editPanelOrder: ["attrs", "options"],
};

// Iniciando o construtor de formulário
const editor = new FormeoEditor(options);
