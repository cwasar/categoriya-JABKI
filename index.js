const $articulesTextArea = document.getElementById('arts')
const $postavshik = document.getElementById('postavshik')
const $mainBtn = document.getElementById('btn')
const $btn2 = document.querySelector('.qwe')

const $articulesList = document.getElementById('artsList')
const $turboCategoriesList = document.getElementById('list')
const $tegsList = document.getElementById('mebelType')
const $siteCategoriesList = document.getElementById('cat-of-cite-list')

const $workRoom = document.getElementById('work-room')
const $kitchenRoom = document.getElementById('kitchen-room')
const $diningRoom = document.getElementById('dining-room')
const $dachaRoom = document.getElementById('dacha-room')
const $hallRoom = document.getElementById('hall-room')
const $sleepingRoom = document.getElementById('sleeping-room')

const mainData = []



$mainBtn.addEventListener('click', () => {
    if ($articulesTextArea.value && $postavshik.value) {
        collectArticules()
        getKeyNumbers(mainData)
        keyHandler(mainData)
        renderLists(mainData)


        $articulesTextArea.value = ''
        $postavshik.value = ''
        mainData.length = 0
    } else {
        alert('Не введены артикулы или название папки поставщка!')
    }
})

function collectArticules() {
    const converttext = $articulesTextArea.value.split('\n')
    let countId = 0
    converttext.map(element => { mainData.push({id: countId++, article: element, provider: $postavshik.value})      
    })
    
}

function getKeyNumbers(data) {
    data.forEach(element => {
       let transformer =  element.article
       element.key = transformer
    })
}

function keyHandler(data) {
    data.forEach(element => {
        switch(element.key) {
            case '00': element.turboCategory = 'Шкафы распашные_H', element.tags = ['Шкафы', 'Шкафы распашные'], element.siteCategory = `Корпусная мебель/Шкафы/Шкафы распашные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 1, dacha: 0, hall: 1, sleep: 1} 
                break
            case '01': element.turboCategory = 'Шкафы купе_H', element.tags = ['Шкафы', 'Шкафы-купе'], element.siteCategory = `Корпусная мебель/Шкафы/Шкафы купе;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 1, dacha: 0, hall: 1, sleep: 1}
                break
            case '02': element.turboCategory = 'Стенки_H', element.tags = ['Стенки'], element.siteCategory = `Корпусная мебель/Стенки;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1}
                break
            case '03': element.turboCategory = 'Комоды_H', element.tags = ['Комоды'], element.siteCategory =  `Корпусная мебель/Комоды;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1}
                break
            case '04': element.turboCategory = 'Тумбы для обуви_H', element.tags = ['Тумбы', 'Тумбы для обуви'], element.siteCategory = `Корпусная мебель/Тумбы/Тумбы для обуви;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 1, sleep: 0} 
                break
            case '05': element.turboCategory = 'Тумбы офисные_H', element.tags = ['Тумбы', 'Тумбы офисные'], element.siteCategory = `Корпусная мебель/Тумбы/Тумбы офисные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1} 
                break
            case '06': element.turboCategory = 'Тумбы под ТВ_H', element.tags = ['Тумбы', 'Тумбы под ТВ'], element.siteCategory = `Корпусная мебель/Тумбы/Тумбы под ТВ;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1} 
                break
            case '07': element.turboCategory = 'Тумбы прикроватные_H', element.tags = ['Тумбы', 'Тумбы прикроватные'], element.siteCategory = `Корпусная мебель/Тумбы/Тумбы прикроватные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1} 
                break
            case '08': element.turboCategory = 'Стеллажи_H', element.tags = ['Стеллажи'], element.siteCategory = `Корпусная мебель/Стеллажи и полки/Стеллажи;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1}
                break
            case '09': element.turboCategory = 'Полки_H', element.tags = ['Полки'], element.siteCategory = `Корпусная мебель/Стеллажи и полки/Полки;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 0} 
                break
            case '10': element.turboCategory = 'Минибары_H', element.tags = ['Мнибары'], element.siteCategory = `Корпусная мебель/Минибары;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 1, dining: 1, dacha: 0, hall: 0, sleep: 1} 
                break
            case '11': element.turboCategory = 'Вешалки настенные_H', element.tags = ['Вешалки настенные'], element.siteCategory = `Корпусная мебель/Вешалки настенные;ПОСТАВЩИКИ/${$postavshik.value}`,  element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 1, sleep: 0} 
                break
            case '12': element.turboCategory = 'Прямые диваны_H', element.tags = ['Диваны'], element.siteCategory = `Мягкая мебель/Диваны/Прямые диваны;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1}  
                break
            case '61': element.turboCategory = 'Угловые диваны_H', element.tags = ['Диваны'], element.siteCategory = `Мягкая мебель/Диваны/Угловые диваны;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1}  
                break
            case '13': element.turboCategory = 'Диваны для кухни_H', element.tags = ['Диваны'], element.siteCategory = `Мягкая мебель/Диваны для кухни;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 1, dining: 0, dacha: 0, hall: 0, sleep: 0}  
                break
            case '14': element.turboCategory = 'Кресла домашние_H', element.tags = ['Кресла', 'Кресла для дома'], element.siteCategory = `Мягкая мебель/Кресла/Кресла домашние;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 1, dining: 1, dacha: 0, hall: 0, sleep: 1}   
                break
            case '15': element.turboCategory = 'Кресла подвесные_H', element.tags = ['Кресла', 'Кресла подвесные'], element.siteCategory = `Мягкая мебель/Кресла/Кресла подвесные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 0} 
                break
            case '16': element.turboCategory = 'Кресла-качалки_H', element.tags = ['Кресла', 'Кресла-качалки'], element.siteCategory = `Мягкая мебель/Кресла/Кресла-качалки;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1}    
                break
            case '17': element.turboCategory = 'Пуфы_H', element.tags = ['Пуфы'], element.siteCategory = `Мягкая мебель/Пуфы и банкетки;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 1, dacha: 0, hall: 1, sleep: 1}
                break
            case '18': element.turboCategory = 'Банкетки_H', element.tags = ['Банкетки'], element.siteCategory = `Мягкая мебель/Пуфы и банкетки;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 1, dacha: 0, hall: 1, sleep: 1}
                break
            case '19': element.turboCategory = 'Бескаркасная мебель_H', element.tags = ['Бескаркасная мебель'], element.siteCategory = `Мягкая мебель/Бескаркасная мебель;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1} 
                break
            case '20': element.turboCategory = 'Кровати двуспальные_H', element.tags = ['Кровати', 'Кровати двуспальные'], element.siteCategory = `Кровати/Кровати двуспальные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1}
                break
            case '21': element.turboCategory = 'Кровати односпальные_H', element.tags = ['Кровати', 'Кровати односпальные'], element.siteCategory = `Кровати/Кровати односпальные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1}
                break
            case '22': element.turboCategory = 'Кровати детские двухярусные_H', element.tags = ['Кровати', 'Кровати детские', 'Кровати двухярусные'], element.siteCategory = `Кровати/Кровати детские/Кровати двухярусные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1}
                break
            case '23': element.turboCategory = 'Кровати детские прочие_H', element.tags = ['Кровати', 'Кровати детские'], element.siteCategory = `Кровати/Кровати детские/Кровати детские прочие;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1}
                break
            case '24': element.turboCategory = 'Кровати детские машинки_H', element.tags = ['Кровати', 'Кровати детские'], element.siteCategory = `Кровати/Кровати детские/Кровати-машинки;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1} 
                break
            case '25': element.turboCategory = 'Кровати детские чердаки_H', element.tags = ['Кровати', 'Кровати детские', 'Кровати-чердаки'], element.siteCategory = `Кровати/Кровати детские/Кровати-чердаки;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1}   
                break
            case '26': element.turboCategory = 'Кровати раскладушки_H', element.tags = ['Кровати', 'Раскладушки'], element.siteCategory = `Кровати/Кровати раскладушки;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 1, hall: 0, sleep: 0}  
                break
            case '27': element.turboCategory = 'Основания для кроватей_H', element.tags = ['Основания для кроватей'], element.siteCategory = `Кровати/Основания для кроватей;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 0} 
                break
            case '28': element.turboCategory = 'Кресла компьютерные детские_H', element.tags = ['Кресла', 'Кресла компьютерные', 'Кресла детские'], element.siteCategory = `Компьютерные кресла/Кресла детские;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1}    
                break
            case '29': element.turboCategory = 'Кресла компьютерные для персонала_H', element.tags = ['Кресла', 'Кресла компьютерные', 'Кресла для персонала'], element.siteCategory = `Компьютерные кресла/Кресла для персонала;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 0}  
                break
            case '30': element.turboCategory = 'Кресла компьютерные для посетителей_H', element.tags = ['Кресла', 'Кресла компьютерные', 'Кресла для посетителей'], element.siteCategory = `Компьютерные кресла/Кресла для посетителей;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 0} 
                break
            case '31': element.turboCategory = 'Кресла компьютерные для руководителя_H', element.tags = ['Кресла', 'Кресла компьютерные', 'Кресла руководителя'], element.siteCategory = `Компьютерные кресла/Кресла для руководителя;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 0}
                break
            case '32': element.turboCategory = 'Кресла компьютерные игровые_H',element.tags = ['Кресла', 'Кресла компьютерные', 'Кресла игровые'], element.siteCategory = `Компьютерные кресла/Кресла игровые;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1}  
                break
            case '33': element.turboCategory = 'Столы обеденные нераскладные_H', element.tags = ['Столы', 'Столы обеденные', 'Столы нераскладные'], element.siteCategory = `Столы/Столы обеденные/Столы нераскладные;Мебель для кухни/Кухонные столы;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 1, dining: 1, dacha: 0, hall: 0, sleep: 0} 
                break
            case '34': element.turboCategory = 'Столы обеденные раскладные_H', element.tags = ['Столы', 'Столы обеденные', 'Столы раскладные'], element.siteCategory = `Столы/Столы обеденные/Столы раскладные;Мебель для кухни/Кухонные столы;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 1, dining: 1, dacha: 0, hall: 0, sleep: 0}  
                break
            case '35': element.turboCategory = 'Столы обеденные книжки_H', element.tags = ['Столы', 'Столы обеденные', 'Столы-книжки'], element.siteCategory = `Столы/Столы обеденные/Столы-книжки;Мебель для кухни/Кухонные столы;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 1, dining: 1, dacha: 0, hall: 0, sleep: 0}   
                break
            case '36': element.turboCategory = 'Столы письменные и компьютерные_H', element.tags = ['Столы', 'Столы письменные', 'Столы компьютерные', 'Столы рабочие'], element.siteCategory = `Столы/Столы письменные и компьютерные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1} 
                break
            case '37': element.turboCategory = 'Столы журнальные_H', element.tags = ['Столы', 'Столы журнальные'], element.siteCategory = `Столы/Журнальные столики;Столы/Кофейные столики;ПОСТАВЩИКИ/${$postavshik.value}`,  element.rooms = {work: 0, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1}  
                break
            case '38': element.turboCategory = 'Столы кофейные_H', element.tags = ['Столы', 'Столы кофейные'], element.siteCategory = `Столы/Журнальные столики;Столы/Кофейные столики;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1}  
                break
            case '39': element.turboCategory = 'Столы туалетные_H', element.tags = ['Столы', 'Столы туалетные'], element.siteCategory = `Столы/Туалетные столики;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1}  
                break
            case '40': element.turboCategory = 'Столы консольные_H', element.tags = ['Столы', 'Столы консольные', 'Консоли'], element.siteCategory = `Столы/Столы консольные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1}   
                break
            case '41': element.turboCategory = 'Столы барные_H', element.tags = ['Столы', 'Столы барные'], element.siteCategory = `Столы/Столы барные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 1, dining: 1, dacha: 0, hall: 0, sleep: 0} 
                break
            case '42': element.turboCategory = 'Вешалки_H', element.tags = ['Вешалки'], element.siteCategory = `Предметы интерьера/Вешалки;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 1, sleep: 0} 
                break
            case '43': element.turboCategory = 'Зеркала_H', element.tags = ['Зеркала'], element.siteCategory = `Предметы интерьера/Зеркала;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 1, dacha: 0, hall: 1, sleep: 1}
                break
            case '44': element.turboCategory = 'Аксессуары_H', element.tags = ['Аксессуары'], element.siteCategory = `Предметы интерьера/Аксессуары;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 0}  
                break
            case '45': element.turboCategory = 'Стулья барные_H', element.tags = ['Стулья', 'Стулья барные'], element.siteCategory = `Стулья/Барные стулья;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 1, dining: 0, dacha: 0, hall: 0, sleep: 0}
                break
            case '46': element.turboCategory = 'Стулья обеденные_H', element.tags = ['Стулья', 'Стулья обеденные'], element.siteCategory = `Стулья/Обеденные стулья;Мебель для кухни/Стулья для кухни;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 1, dining: 1, dacha: 0, hall: 0, sleep: 0}
                break
            case '47': element.turboCategory = 'Стулья складные_H', element.tags = ['Стулья', 'Стулья складные'], element.siteCategory = `Стулья/Складные стулья;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 1, hall: 0, sleep: 0} 
                break
            case '48': element.turboCategory = 'Табуреты_H', element.tags = ['Стулья', 'Табуреты'], element.siteCategory = `Стулья/Табуреты;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 1, dining: 0, dacha: 0, hall: 0, sleep: 0} 
                break
            case '49': element.turboCategory = 'Матрасы беспружинные_H', element.tags = ['Матрасы', 'Матрасы беспружинные'], element.siteCategory = `Матрасы/Матрасы беспружинные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1} 
                break
            case '50': element.turboCategory = 'Матрасы пружинные_H', element.tags = ['Матрасы', 'Матрасы пружинные'], element.siteCategory = `Матрасы/Матрасы пружинные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 1}  
                break
            case '51': element.turboCategory = 'Наматрасники и топперы_H', element.tags = ['Наматрасники', 'Топперы'], element.siteCategory = `Матрасы/Наматрасники и топперы;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1}    
                break
            case '52': element.turboCategory = 'Бра_H', element.tags = ['Освещение', 'Свет', 'Бра', 'Светильники настенные'], element.siteCategory = `Свет/Бра;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 0}    
                break
            case '53': element.turboCategory = 'Настольные светильники_H', element.tags = ['Освещение', 'Свет', 'Светильники настольные'], element.siteCategory = `Свет/Настольные светильники;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 0}    
                break
            case '54': element.turboCategory = 'Потолочные люстры_H', element.tags = ['Освещение', 'Свет', 'Люстры'], element.siteCategory = `Свет/Потолочные светильники/Люстры;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1}    
                break
            case '55': element.turboCategory = 'Потолочные светильники_H', element.tags = ['Освещение', 'Свет', 'Светильники потолочные'], element.siteCategory = `Свет/Потолочные светильники/Светильники;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 1, dining: 1, dacha: 0, hall: 1, sleep: 1}    
                break
            case '56': element.turboCategory = 'Торшеры_H', element.tags = ['Освещение', 'Свет', 'Торшеры'], element.siteCategory = `Свет/Торшеры;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 1}    
                break
            case '57': element.turboCategory = 'Уличные светильники_H', element.tags = ['Освещение', 'Свет', 'Уличные светильники'], element.siteCategory = `Свет/Уличные светильники;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 1, hall: 0, sleep: 0}    
                break
            case '58': element.turboCategory = 'Прихожие_H', element.tags = ['Прихожие'], element.siteCategory = `Корпусная мебель/Прихожие;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 1, sleep: 0}    
                break
            case '59': element.turboCategory = 'Шкафы навесные_H', element.tags = ['Шкафы', 'Шкафы навесные'], element.siteCategory = `Корпусная мебель/Шкафы навесные;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 1, dacha: 0, hall: 0, sleep: 0}    
                break
            case '60': element.turboCategory = 'Споты_H', element.tags = ['Свет', 'Споты'], element.siteCategory = `Свет/Споты;ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 1, kitchen: 1, dining: 1, dacha: 0, hall: 0, sleep: 0}    
                break
            case '60': element.turboCategory = 'Запчасти', element.tags = ['Запчасти'], element.siteCategory = `ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 0}    
                break
            default: element.turboCategory = 'ОШИБКА!!!', element.tags = ['ОШИБКА!!!'], element.siteCategory = `ПОСТАВЩИКИ/${$postavshik.value}`, element.rooms = {work: 0, kitchen: 0, dining: 0, dacha: 0, hall: 0, sleep: 0}
        }
    })
}

function renderLists(data) {
    data.map(item => {
        $articulesList.insertAdjacentHTML('beforeend', `<li class="red">${item.article}</li>`)
        $turboCategoriesList.insertAdjacentHTML('beforeend', `<li>${item.turboCategory}</li>`)
        $tegsList.insertAdjacentHTML('beforeend', `<li>${item.tags.join(';')}</li>`)
        $siteCategoriesList.insertAdjacentHTML('beforeend', `<li>${item.siteCategory}</li>`)
        $workRoom.insertAdjacentHTML('beforeend', `<li>${item.rooms.work}</li>`)
        $kitchenRoom.insertAdjacentHTML('beforeend', `<li>${item.rooms.kitchen}</li>`)
        $diningRoom.insertAdjacentHTML('beforeend', `<li>${item.rooms.dining}</li>`)
        $dachaRoom.insertAdjacentHTML('beforeend', `<li>${item.rooms.dacha}</li>`)
        $hallRoom.insertAdjacentHTML('beforeend', `<li>${item.rooms.hall}</li>`)
        $sleepingRoom.insertAdjacentHTML('beforeend', `<li>${item.rooms.sleep}</li>`)
    })
}


// $btn2.addEventListener('click', showDublicate)

// function showDublicate() {
//     const arr =  $articulesList.children
//     const newArr = Array.from(arr).map(item => {return item.innerText})
//     console.log(newArr);
//     let set = new Set(newArr)
//     let res = Array.from(set)
//     console.log(res);

//    Array.from(arr).map(item => {
//        for(let i = 0; i < set.length; i++) {
//            if (item.innerText === set[i]) {
//                item.classList.add('uniq')
//            }
//        }
//    })
        
// }