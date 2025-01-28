function validateForm(form){
	
	var msg = "";
	
    //VALIDAÇÃO CAMPOS PAINEL SOLICITANTE
    if(form.getValue("nome") == ""){
        msg += "Campo nome não preenchido!";
    }
    if(form.getValue("email") == ""){
        msg += "Campo email não preenchido!";
    }
    if(form.getValue("telefone") == ""){
        msg += "Campo telefone não preenchido!";
    }
    if(form.getValue("Identidade") == ""){
        msg += "Campo Identidade não preenchido!";
    }
    if(form.getValue("dataNascimento") == ""){
        msg += "Campo Data de nascimento não preenchido!";
    }

      //VALIDAÇÃO PAINEL REPONSAVEIS
      var responsaveis = form.getChildrenIndexes(responsaveisTabela);
      if (responsaveis.length == 0) {
          msg += "Nenhum responsável atribuido"
      }

    //VALIDAÇÃO CAMPOS PAINEL PONTO COMERCIAL
    if(form.getValue("segunda") != "on" &&  form.getValue("terca") != "on" && form.getValue("quarta") != "on" &&  form.getValue("quinta") != "on" &&  form.getValue("sexta") != "on" && form.getValue("sabado") != "on" &&  form.getValue("domingo") != "on" );
    
    if(form.getValue("tipoPonto") == ""){
        msg += "Selecione o tipo de ponto!";
    }
    if(form.getValue("cep") == ""){
        msg += "Campo cep não preenchido!";
    }
    if(form.getValue("logradouro") == ""){
        msg += "Campo logradouro não preenchido!";
    }
    if(form.getValue("bairro") == ""){
        msg += "Campo bairro não preenchido!";
    }
    if(form.getValue("cidade") == ""){
        msg += "Campo cidade não preenchido!";
    }
    if(form.getValue("estado") == ""){
        msg += "Campo estado não preenchido!";
    }

  



    // VALIDAÇÃO PAINEL FINANCEIRO

    if (msg != "") {
        throw msg;
    }

}