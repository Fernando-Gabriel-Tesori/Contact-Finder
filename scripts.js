const p = document.getElementById('contacts');
const input = document.querySelector('input');
const clear = document.getElementById('clear');

const contacts =
    [
        {
            "nome": "Carlos",
            "endereco": "Rua dos Girassóis, nº 557"
        },
        {
            "nome": "Maurício",
            "endereco": "Rua da Paz, nº 374"
        },
        {
            "nome": "Lucas",
            "endereco": "Rua da Paz, nº 715"
        },
        {
            "nome": "João",
            "endereco": "Rua da Esperança, nº 776"
        },
        {
            "nome": "Pedro",
            "endereco": "Estrada da Liberdade, nº 392"
        },
        {
            "nome": "Juliana",
            "endereco": "Rua das Estrelas, nº 214"
        },
        {
            "nome": "Joana",
            "endereco": "Rua do Sol, nº 465"
        },
        {
            "nome": "Mariana",
            "endereco": "Rua dos Girassóis, nº 236"
        },
        {
            "nome": "Paula",
            "endereco": "Rua do Sol, nº 493"
        },
        {
            "nome": "Jorge",
            "endereco": "Rua da Esperança, nº 43"
        },
        {
            "nome": "Fernando",
            "endereco": "Estrada da Liberdade, nº 285"
        },
        {
            "nome": "Fernanda",
            "endereco": "Avenida dos Pássaros, nº 386"
        },
        {
            "nome": "Marilia",
            "endereco": "Travessa das Pedras, nº 917"
        },
        {
            "nome": "Julia",
            "endereco": "Rua dos Girassóis, nº 299"
        },
        {
            "nome": "Debora",
            "endereco": "Estrada da Liberdade, nº 953"
        },
        {
            "nome": "Mateus",
            "endereco": "Estrada da Liberdade, nº 908"
        },
        {
            "nome": "Cleiton",
            "endereco": "Rua dos Girassóis, nº 19"
        },
        {
            "nome": "Matheus",
            "endereco": "Rua do Sol, nº 14"
        },
        {
            "nome": "Felicia",
            "endereco": "Rua da Esperança, nº 199"
        },
        {
            "nome": "Paulo",
            "endereco": "Alameda das Árvores, nº 981"
        },
        {
            "nome": "Ana",
            "endereco": "Travessa das Pedras, nº 917"
        },
        {
            "nome": "Maria",
            "endereco": "Rua da Paz, nº 193"
        },
        {
            "nome": "Luiz",
            "endereco": "Rua da Esperança, nº 504"
        },
        {
            "nome": "Amanda",
            "endereco": "Estrada da Liberdade, nº 301"
        },
        {
            "nome": "Natalia",
            "endereco": "Rua do Sol, nº 355"
        },
        {
            "nome": "Beatriz",
            "endereco": "Rua da Paz, nº 398"
        },
        {
            "nome": "Vinicius",
            "endereco": "Avenida dos Pássaros, nº 653"
        },
        {
            "nome": "Henrique",
            "endereco": "Rua do Sol, nº 286"
        },
        {
            "nome": "Claudia",
            "endereco": "Alameda das Árvores, nº 877"
        },
        {
            "nome": "Claudio",
            "endereco": "Rua da Paz, nº 399"
        },
        {
            "nome": "Jefferson",
            "endereco": "Rua do Sol, nº 855"
        },
        {
            "nome": "Manuella",
            "endereco": "Alameda das Árvores, nº 278"
        },
        {
            "nome": "Kaique",
            "endereco": "Alameda das Árvores, nº 663"
        },
        {
            "nome": "Tatiana",
            "endereco": "Rua da Esperança, nº 108"
        },
        {
            "nome": "Laura",
            "endereco": "Rua das Flores, nº 658"
        },
        {
            "nome": "Isabela",
            "endereco": "Rua da Paz, nº 783"
        },
        {
            "nome": "Guilherme",
            "endereco": "Rua dos Girassóis, nº 75"
        },
        {
            "nome": "Gabriel",
            "endereco": "Rua da Paz, nº 310"
        },
        {
            "nome": "Antônio",
            "endereco": "Rua do Sol, nº 790"
        },
        {
            "nome": "Priscila",
            "endereco": "Alameda das Árvores, nº 856"
        },
        {
            "nome": "Carla",
            "endereco": "Rua das Flores, nº 767"
        },
        {
            "nome": "Tiago",
            "endereco": "Rua da Paz, nº 100"
        },
        {
            "nome": "André",
            "endereco": "Rua dos Girassóis, nº 939"
        },
        {
            "nome": "Rosana",
            "endereco": "Travessa das Pedras, nº 183"
        },
        {
            "nome": "Rosa",
            "endereco": "Rua da Esperança, nº 469"
        },
        {
            "nome": "Thiago",
            "telefone": "9556-7175",
            "endereco": "Alameda das Árvores, nº 779"
        },
        {
            "nome": "Carmelia",
            "endereco": "Rua da Paz, nº 806"
        },
        {
            "nome": "Rodrigo",
            "endereco": "Rua da Paz, nº 414"
        },
        {
            "nome": "Larissa",
            "endereco": "Rua das Flores, nº 405"
        },
        {
            "nome": "Solange",
            "endereco": "Avenida dos Pássaros, nº 86"
        },
        {
            "nome": "Soraya",
            "endereco": "Travessa das Pedras, nº 346"
        },
        {
            "nome": "Patricia",
            "endereco": "Rua da Esperança, nº 450"
        },
        {
            "nome": "Paola",
            "endereco": "Estrada da Liberdade, nº 260"
        },
        {
            "nome": "Rosangela",
            "endereco": "Avenida dos Pássaros, nº 94"
        },
        {
            "nome": "Wagner",
            "endereco": "Avenida dos Pássaros, nº 316"
        },
        {
            "nome": "Vagner",
            "endereco": "Rua das Flores, nº 433"
        },
        {
            "nome": "Pietra",
            "endereco": "Rua do Sol, nº 809"
        },
        {
            "nome": "Isaque",
            "endereco": "Estrada da Liberdade, nº 547"
        },
        {
            "nome": "Tatiane",
            "endereco": "Rua do Sol, nº 216"
        },
        {
            "nome": "Gabriela",
            "endereco": "Avenida dos Pássaros, nº 139"
        },
        {
            "nome": "Gabriele",
            "endereco": "Estrada da Liberdade, nº 988"
        },
        {
            "nome": "Pietro",
            "endereco": "Rua das Flores, nº 467"
        },
        {
            "nome": "Arthur",
            "endereco": "Estrada da Liberdade, nº 436"
        },
        {
            "nome": "Levi",
            "endereco": "Rua das Flores, nº 51"
        },
        {
            "nome": "Rose",
            "endereco": "Rua das Flores, nº 368"
        },
        {
            "nome": "Maicon",
            "endereco": "Rua das Flores, nº 289"
        },
        {
            "nome": "Leonardo",
            "endereco": "Alameda das Árvores, nº 984"
        },
        {
            "nome": "Eduarda",
            "endereco": "Rua das Flores, nº 331"
        },
        {
            "nome": "Elisa",
            "endereco": "Rua da Paz, nº 36"
        },
        {
            "nome": "Silvio",
            "endereco": "Estrada da Liberdade, nº 666"
        },
        {
            "nome": "Bruno",
            "endereco": "Rua da Esperança, nº 694"
        },
        {
            "nome": "Breno",
            "endereco": "Rua do Sol, nº 580"
        },
        {
            "nome": "Rafael",
            "endereco": "Avenida dos Pássaros, nº 917"
        },
        {
            "nome": "Rafaela",
            "endereco": "Alameda das Árvores, nº 931"
        },
        {
            "nome": "Silvia",
            "endereco": "Rua dos Girassóis, nº 944"
        },
        {
            "nome": "Davi",
            "endereco": "Rua das Flores, nº 285"
        },
        {
            "nome": "Lucia",
            "endereco": "Alameda das Árvores, nº 703"
        },
        {
            "nome": "Leandro",
            "endereco": "Rua da Paz, nº 60"
        },
        {
            "nome": "Rodolfo",
            "endereco": "Alameda das Árvores, nº 329"
        },
        {
            "nome": "Ricardo",
            "endereco": "Estrada da Liberdade, nº 559"
        },
        {
            "nome": "Esther",
            "endereco": "Rua do Sol, nº 347"
        },
        {
            "nome": "Roberta",
            "endereco": "Rua dos Girassóis, nº 933"
        },
        {
            "nome": "Robson",
            "endereco": "Travessa das Pedras, nº 234"
        },
        {
            "nome": "Vilma",
            "endereco": "Avenida dos Pássaros, nº 835"
        },
        {
            "nome": "Adriana",
            "endereco": "Estrada da Liberdade, nº 714"
        },
        {
            "nome": "Andressa",
            "endereco": "Alameda das Árvores, nº 328"
        },
        {
            "nome": "Giovana",
            "endereco": "Rua das Flores, nº 10"
        },
        {
            "nome": "Adrian",
            "endereco": "Rua da Paz, nº 755"
        },
        {
            "nome": "Adriano",
            "endereco": "Rua do Sol, nº 701"
        },
        {
            "nome": "Vitoria",
            "endereco": "Rua da Esperança, nº 50"
        },
        {
            "nome": "Victor",
            "endereco": "Rua do Sol, nº 111"
        },
        {
            "nome": "Raul",
            "endereco": "Rua da Esperança, nº 601"
        },
        {
            "nome": "Sara",
            "endereco": "Rua do Sol, nº 969"
        },
        {
            "nome": "Vitor",
            "endereco": "Estrada da Liberdade, nº 232"
        },
        {
            "nome": "William",
            "endereco": "Rua da Paz, nº 420"
        },
        {
            "nome": "Bernardo",
            "telefone": "9747-4063",
            "endereco": "Rua da Esperança, nº 461"
        },
        {
            "nome": "Felipe",
            "endereco": "Rua da Esperança, nº 839"
        },
        {
            "nome": "Verônica",
            "endereco": "Avenida dos Pássaros, nº 920"
        },
        {
            "nome": "Sabrina",
            "endereco": "Rua dos Girassóis, nº 116"
        },
        {
            "nome": "Sandra",
            "endereco": "Avenida dos Pássaros, nº 335"
        }
    ]


function search() {
    const found = false;
    for (const contact of contacts) {
        if (input.value.toLowerCase() === contact.nome.toLowerCase()) {
            p.innerHTML = `Nome: ${contact.nome}; Endereço: ${contact.endereco};`;
            break;
        } if (!found) {
            p.innerHTML = "Contato não encontrado!";
        }
        clear.style.display = 'inline';
    }
}

function clearSearch() {
    input.value = '';
    p.innerHTML = '';
    clear.style.display = 'none';
}