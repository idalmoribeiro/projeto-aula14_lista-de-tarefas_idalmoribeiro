const tasks = [
    {title: "Comprar comida para o gato", type: "Urgente"},
    {title: "Consertar Computador", type: "Importante"},
    {title: "Beber água", type: "Normal"},
    {title: "Enviar relatório trimestral", type: "Importante"},
    {title: "Fazer exercícios físicos", type: "Normal"},
    {title: "Agendar consulta médica", type: "Urgente"},
    {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
    {title: "Limpar a despensa", type: "Importante"},
    {title: "Pagar a conta de energia", type: "Urgente"},
    {title: "Assistir a um documentário interessante", type: "Normal"},
  ];
  
//capturando a lista de tarefas
  const lista_tarefas = document.querySelector("ul");

//criando os elementos de cada ítem da lista de tarefas 

function createTaskItem (tasks){
  //removendo ítens repetidos
  lista_tarefas.innerHTML = "";

  //laço de repetição para a criação dos elementos, adição de classes e hierarquia
  for(let i=0; i<tasks.length; i++){
    
  const create_li = document.createElement("li");
  const create_div = document.createElement("div");

//criando elemento span e adicionando condições de suas classes
  const create_span = document.createElement("span");
  create_span.classList.add("task_type_circle");
  if (tasks[i].type == "Urgente"){
    create_span.classList.add("task_type_urgent");

  }else if (tasks[i].type == "Importante"){;
    create_span.classList.add("task_type_importante");
  
  }else if (tasks[i].type == "Normal") {
    create_span.classList.add("task_type_normal");
  }

//adicionando o nome em cada tarefa
  const create_liText = document.createElement("p");
  create_liText.innerText = tasks[i].title;

//criando botão delete para cada tarefa com imagem
  const create_deleteButton = document.createElement("button");
  const create_img = document.createElement("img");
  create_img.src = "./assets/trash-icon.svg"
  create_deleteButton.appendChild(create_img);

//adicionar o indice do laço for como um atributo de dados do botão
  create_deleteButton.setAttribute("data-index", i);

//adicionando evento de clique ao botão delete e a imagem
//apagando elemento de indice atribuído ao botão
//atualizando a lista sem o ítem removido
    create_deleteButton.addEventListener("click", function(event){
    const index =event.target.closest("button").getAttribute("data-index");
    tasks.splice(index,1);
    createTaskItem(tasks);
  });

  create_img.addEventListener("click", function(event){
    event.stopImmediatePropagation();
    create_deleteButton.click();
  });

//adicionando classes ao elementos criados
  create_li.classList.add("list_item");
  create_div.classList.add("list_item_info");
  create_liText.classList.add("task_type_text");
  create_deleteButton.classList.add("remove_task_button");
  
//definindo hierarquia de cada elemento "li" da lista
  create_div.appendChild(create_span);
  create_div.appendChild(create_liText);
  create_div.appendChild(create_deleteButton);
  
  
  create_li.appendChild(create_div);      
  lista_tarefas.appendChild(create_li);
  }
}

//executando a função de criação dos elementos da lista
createTaskItem(tasks);

//adicionando evento ao clique do botão "tarefa_button"
// capturando valores dos inputs 

const novaTarefa_button = document.querySelector(".tarefa_button");

novaTarefa_button.addEventListener("click", function(event){
    
    const novaTarefa_nome = document.querySelector("#task_name");
    const novaTarefa_tipo = document.querySelector("#task_type");
    
//função para adicionar nova tarefa ao array de tarefa "Tasks"
function adicionar_novaTarefa (title, type){
    let novaTaefa_objeto = {title: title, type: type};
    tasks.push(novaTaefa_objeto);
}

adicionar_novaTarefa(novaTarefa_nome.value, novaTarefa_tipo.value);
createTaskItem(tasks);

//limpar os campos dos inputs e selext após a adicão da nova tarefa
novaTarefa_nome.value = "";
novaTarefa_tipo.value = "";

});

