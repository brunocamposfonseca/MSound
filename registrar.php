

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/loginreg.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"></script>
    <title>Registrar</title>
</head>
<body>
    <div class="div1-divmae-conteiner">
        <div class="div2-navbar__Ctn-navbar">
            <div class="div3-navctn-navbar">
                <span class="span1-logo-navbar">
                    <img class="img1-logoctn-navbar" src="images/logo-pint.png" alt="">
                    <span class="span2-namelogo-navbar">MySound</span>
                </span>
            </div>
        </div>
        <div class="div2-main__Ctn-main registroform">
            <form action="registrar.php" method="POST" id="form" class="form1-loginctn-main ">
                <div class="div3-textlogin-main">
                    <span class="span1-textlogin-main">Registrar</span>
                    <span class="span1-ptxtlogin-main">Registre para continuar navegando!</span>
                </div>
                <div class="div3-boxlogin-main">
                    <div class="div4-boxinput-main">
                        <label for="username" class="span1-nameinput-main">Nome completo</label>
                        <input type="text" id="nome" class="input1-campoinput-main" placeholder="Nome" >
                        <small class="div6-errormsg-main"></small>
                    </div>
                    <div class="div4-boxinput-main">
                        <label for="email" class="span1-nameinput-main">Email</label>
                        <input type="text" id="email" class="input1-campoinput-main" placeholder="Email">
                        <small class="div6-errormsg-main"></small>
                    </div>
                    <div class="divau-inlineiptbox-main">
                        <div class="div4-boxinput-main senha-boxinput">
                            <label for="senha" class="span1-nameinput-main">Senha</label>
                            <input type="password" id="senha" class="input1-campoinput-main" placeholder="Senha">
                            <small class="div6-errormsg-main"></small>
                        </div>
                        <div class="div4-boxinput-main senha-boxinput">
                            <label for="confsenha" class="span1-nameinput-main">Confirmar senha</label>
                            <input type="password" id="confsenha" class="input1-campoinput-main" placeholder="Confirmar Senha">
                            <small class="div6-errormsg-main"></small>
                        </div>
                    </div>
                    <div class="div4-boxinput-main">
                        <label for="telefone" class="span1-nameinput-main">Telefone</label>
                        <input type="tel" id="telefone" class="input1-campoinput-main" maxlength="13" placeholder="Telefone" onkeypress="formatar('##-#####-####', this)">
                        <small class="div6-errormsg-main"></small>
                    </div>
                    <div class="div4-boxinput-main">
                        <div class="div5-infologinipt">
                            <label for="genero" class="span1-nameinput-main">Gênero</label>
                        </div>
                        <div class="div5-boxinput-main radiooptgener">
                            <div class="div6-radiobox-main">
                                <input type="radio" name="radiogenero" class="radiogenero" id="masc" required>
                                <span class="span1-namegenero-main">Masculino</span>
                            </div>
                            <div class="div6-radiobox-main">
                                <input type="radio" name="radiogenero" class="radiogenero" id="femi" required>
                                <span class="span1-namegenero-main">Feminino</span>
                            </div>
                            <div class="div6-radiobox-main">
                                <input type="radio" name="radiogenero" class="radiogenero" id="none" required>
                                <span class="span1-namegenero-main">Não informar</span>
                            </div>
                        </div>
                        <small class="div6-errormsg-main"></small>
                    </div>
                    <div class="divau-inlineiptbox-main">
                        <div class="div4-boxinput-main">
                            <label for="datanasc" class="span1-nameinput-main">Data de nascimento</label>
                            <input type="tel" maxlength="10" id="data" class="input1-campoinput-main" placeholder="Data de nascimento" onkeypress="formatar('##/##/####', this)">
                            <small class="div6-errormsg-main"></small>
                        </div>
                        <div class="div4-boxinput-main">
                            <label for="cpf" class="span1-nameinput-main">CPF</label>
                            <input type="text" maxlength="14" id="cpf" class="input1-campoinput-main" placeholder="CPF" onkeypress="formatar('###.###.###-##', this)">
                            <small class="div6-errormsg-main"></small>
                        </div>
                    </div>
                </div>
                <div class="div3-btnlogreg-main">
                    <div class="div5-lembrarlogin-main">
                        <input type="checkbox" class="checkboxtermo" id="checkbox">
                        <span class="span1-checkbox-main">
                            Aceitar <a href="#">Termos e Condições</a>
                        </span>
                    </div>
                    <button type="submit" class="btn1-logregbtn-main">Registrar</button>
                    <span class="span-logreg-main">
                        Já tem uma conta. <a href="login.html">Fazer Login</a>!
                    </span>
                </div>  
            </form>
        </div>
    </div>
    <script src="js/reg.js"></script>
</body>
</html>