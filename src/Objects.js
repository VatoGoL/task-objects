/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender) {
        switch (data.gender) {
            case 'female':
                if (data.age) {
                    delete data.age;
                }
                break;
            case 'male':
                if (!data.income) {
                    data.income = 100000;
                }
                break;
        }
    }
    return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let result = new Array();

    for (let key in obj1) {
        result.push(key);
    }
    for (let key in obj2) {
        result.push(key);
    }
    for (let key in obj3) {
        result.push(key);
    }

    result = result.sort();

    return result;
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    let result = new Array(count);

    for (let i = 0; i < count; i++) {
        result[i] = {
            id: i,
        };

        for (let key in obj) {
            result[i][key] = obj[key];
            if (typeof result[i][key] == 'object') {
                result[i][key] = ob(result[i][key]);
            } else {
                result[i][key] = obj[key];
            }
        }
    }

    function ob(obj) {
        let res = Object();
        for (let key in obj) {
            if (typeof res[key] == 'object') {
                res[key] = ob(res[key]);
            } else {
                res[key] = obj[key];
            }
        }
        return res;
    }

    return result;
}
