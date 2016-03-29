//Функция генерации случайной буквы из переданного в нее массива букв
    function getLetter(arr){
        return arr[Math.floor(Math.random()*arr.length)];
    }
//Функция прогона i-го члена массива слова по массивам алфавита
    function getLetterArr(arr1,arr2) {
        var ii=0;
        do{
            if(arr1[i]==arr2[ii]){
                genWord_1.push(arr2[ii]);
                genWord_2.push(getLetter(arr2));
                n++;
                return [genWord_1,  genWord_2, n];
                break;
            }else {
                ii++;
            }
        }while (ii<arr2.length);
    }
//Массивы прописных и строчных букв
    var letter_A = ['А','Е','Ё','И','О','У','Ы','Э','Ю','Я'];
    var letter_B = ['Б','В','Г','Д','Ж','З','Й','К','Л','М','Н','П','Р','С','Т','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ь'];
    var letter_a = ['а','е','ё','и','о','у','ы','э','ю','я'];
    var letter_b = ['б','в','г','д','ж','з','й','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ','ъ','ь'];

    do {
        //Пользователь вводит слово которое компьютер должен сгенерировать
        var word = prompt('Введите слово (русскими буквами), которое компьютер должен сгенерировать:');
        //Определяем из каких букв состоит массив слова и одновременно проверяем на отсутствие лишних знаков
        //Для этого разваливаем слово на буквы из которых формируется массив слова
        var arrWord = word.split('');
        //Теперь надо взять член массива и сравнить его с массивами алфавита и сформировать член массива для генерации
        var n1 = 0, n2 = 0;
        do {
            var genWord_1 = [];
            var genWord_2 = [];
            var n = 0, nSum = 0;
            for (var i = 0; i < arrWord.length; i++) {//Цикл сравнения и генерации слова из аналогичных массивов
                n = 0;
                getLetterArr(arrWord, letter_A);
                getLetterArr(arrWord, letter_a);
                getLetterArr(arrWord, letter_B);
                getLetterArr(arrWord, letter_b);
                nSum = nSum + n;
            }
            if (nSum != arrWord.length) {//Исходное слово может быть введено некорректно для работы программы
                alert('В исходном слове есть не русские буквы или лишние знаки!');
                n1=1;
            }
            if (genWord_1.length > 0) {
                nSum=0;
                for (var iii = 0; iii < genWord_1.length; iii++) {
                    n = 0;
                    if (genWord_1[iii] == genWord_2[iii]) {
                        n++;
                        nSum = nSum + n;
                    } else {
                        n2++;
                        break;
                    }
                }
                if (nSum == genWord_1.length) {
                    n2++;
                    alert('Совпало "' + genWord_1.join('') + '" = "' + genWord_2.join('')+'"'+'\n\ '+'Количество циклов= '+n2);
                    n1=1;
                }
            } else {
                alert('Совпадений нет!');
            }
        }while (n1!=1);
        var again = prompt('Повторим! 1-да, иначе нет');
    }while (parseInt(again) == 1);