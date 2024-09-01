document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Cria um novo documento PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Adiciona o conteúdo ao PDF
    doc.text(`Nome: ${nome}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Mensagem: ${mensagem}`, 10, 30);

    // Salva o PDF com um nome de arquivo
    doc.save('formulario.pdf');
});
