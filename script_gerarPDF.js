document.getElementById('form_completo').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    try {
        // Captura os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const idade = document.getElementById('idade').value;
        const dataNascimento = document.getElementById('data-nascimento').value;
        const telefone = document.getElementById('telefone').value;
        const website = document.getElementById('website').value;
        const pais = document.getElementById('pais').value;
        const genero = document.querySelector('input[name="genero"]:checked')?.value || '';
        const interesses = Array.from(document.querySelectorAll('input[name="interesse"]:checked'))
                                .map(el => el.value)
                                .join(', ');
        const satisfacao = document.getElementById('satisfacao').value;
        const mensagem = document.getElementById('mensagem').value;

        // Cria um novo documento PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Adiciona o conteúdo ao PDF
        doc.text(`Nome: ${nome}`, 10, 10);
        doc.text(`E-mail: ${email}`, 10, 20);
        doc.text(`Senha: ${senha}`, 10, 30);
        doc.text(`Idade: ${idade}`, 10, 40);
        doc.text(`Data de Nascimento: ${dataNascimento}`, 10, 50);
        doc.text(`Telefone: ${telefone}`, 10, 60);
        doc.text(`Website: ${website}`, 10, 70);
        doc.text(`País: ${pais}`, 10, 80);
        doc.text(`Gênero: ${genero}`, 10, 90);
        doc.text(`Áreas de Interesse: ${interesses}`, 10, 100);
        doc.text(`Nível de Satisfação: ${satisfacao}`, 10, 110);
        doc.text(`Mensagem: ${mensagem}`, 10, 120);

        // Define o nome do arquivo com a data e hora
        const fileName = `formulario_${dateStr}_${timeStr}.pdf`;
        alert("PDF salvo com sucesso!");

    } catch (error) {
        console.error("Erro ao salvar o PDF:", error);
        alert("Houve um problema ao tentar salvar o PDF. Por favor, tente novamente.");
    }
});
