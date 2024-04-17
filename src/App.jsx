import "./App.css";
import logo from "./assets/logo.svg";
import logo1 from "./assets/logo1.svg";
import house from "./assets/home.svg";
import cars from "./assets/cars.svg";
import cardImg1 from "./assets/Frame.svg";
import cardImg2 from "./assets/Frame (1).svg";
import cardImg3 from "./assets/Frame (2).svg";
import build from "./assets/build.svg";
import howBuild from "./assets/howbuild.svg";
import social1 from "./assets/Rectangle (2).svg";
import social2 from "./assets/Rectangle (3).svg";
import social3 from "./assets/Rectangle (4).svg";
import social4 from "./assets/Rectangle (5).svg";
import social5 from "./assets/Rectangle (6).svg";
import social6 from "./assets/Rectangle (7).svg";
import howCars from "./assets/how cars (2).svg";
import howCars1 from "./assets/how cars (3).svg";
import howCars2 from "./assets/how cars (4).svg";
import wrap_1 from "./assets/Frame (3).svg";
import wrap_2 from "./assets/Waste removal.svg";
import wrap_3 from "./assets/Formwork.svg";
import wrap_4 from "./assets/Precasts.svg";
import wrap_5 from "./assets/Facades.svg";
import wrap_6 from "./assets/Fit-out.svg";
import wrap_7 from "./assets/Scaffolding.svg";
import wrap_8 from "./assets/Frame (4).svg";
import wrap_9 from "./assets/MEP.svg";
import construc from "./assets/Frame (5).svg";
import micro1 from "./assets/Frame (6).svg";
import micro2 from "./assets/Frame (7).svg";
import micro3 from "./assets/Frame (8).svg";
import backg1 from "./assets/backg1.svg";
import howsworking from "./assets/howsworks.svg";
import po1 from "./assets/Frame (9).svg";
import kavichki from "./assets/Frame (10).svg";
import avatar from "./assets/Frame (12).svg";
import howControl from "./assets/Frame (13).svg";
import howControl1 from "./assets/Key suppliers engaged.svg";
import howControl2 from "./assets/100Compliance.svg";
import group1 from "./assets/Group 69.svg";
import group2 from "./assets/Group 70.svg";
import group3 from "./assets/Group 71.svg";
import group4 from "./assets/Group 72.svg";
import hamburger from "./assets/hamburger.png"

function App() {
  return (
    <>
      <header>
        <div className="left_section-header">
          <img src={logo} alt="" />
        </div>
        <div className="right_section-header">
          <ul className="ul-header">
            <li id="activeLi">Главная</li>
            <li>О нас</li>
            <li>Продукция</li>
            <li>Процесс</li>
            <li>Надёжность</li>
            <li>Клиенты</li>
            <li>Связаться с нами</li>
            <button>Заказать демо</button>
          </ul>
          <img className="hamburger" src={hamburger} alt="" />
        </div>
      </header>

      <div className="all">
        <main className="mainSection">
          <div className="top_section-main">
            <h1>
              Умная доставка материалов для <br /> сложных строительных площадок
            </h1>
            <button className="firstBtnMain">Заказать демо</button>
            <button className="lastBtnMain">Подробнее</button>
          </div>
          <div className="bottom_section-main">
            <img src={house} alt="" />
            <img src={cars} alt="" />
          </div>
        </main>

        <section className="wrapper-2">
          <div className="card">
            <img src={cardImg1} alt="" />
            <div className="card-body">
              <h4>Повышение эффективности</h4>
              <p>Эффективные проекты стоят дешевле и завершаются в срок.</p>
            </div>
          </div>
          <div className="card">
            <img src={cardImg2} alt="" />
            <div className="card-body">
              <h4>Снижение потерь</h4>
              <p>
                Тщательно отслеживайте движение стройматериалов, чтобы избежать
                краж и повреждений.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={cardImg3} alt="" />
            <div className="card-body">
              <h4>Повышение безопасности</h4>
              <p>
                Обеспечьте здоровье и благополучие людей, работающих на вашей
                площадке.
              </p>
            </div>
          </div>
        </section>

        <section className="wrapper-3">
          <div className="top-section-wrapper-3">
            <h1>Строительство - это хаос</h1>
            <p>
              Хаос может быть удивительной творческой силой, воздвигающая новые
              здания из пыли. Хаос вызывает несчастные случаи, задержки и
              потери. Он вводит проекты в стресс и разочарование. Это означает,
              что вы действительно не контролируете ситуацию.
            </p>
            <img src={build} alt="" />
          </div>
          <div className="bottom-section-wrapper-3">
            <h3>
              Пора навести порядок на вашей стройплощадке <br /> и взять под
              контроль свой проект
            </h3>
          </div>
        </section>

        <section className="wrapper-4">
          <div className="max-container">
            <div className="top-section_wrapper-4">
              <div className="left-section_wrapper-4">
                <h1>
                  Мы заботимся о доставке на стройплощадку и о людях, которые на
                  них рассчитывают
                </h1>
                <p>
                  Мы знаем всё о гордости от сияющего нового здания. Нам также
                  известно всё о разочаровании от попыток завершить проект в
                  срок и в рамках бюджета.
                </p>
                <h4>Мы здесь, чтобы помочь.</h4>
              </div>
              <div className="right-section_wrapper-4">
                <img src={howBuild} alt="" />
              </div>
            </div>
          </div>
          <div className="line-row"></div>
          <div className="bottom-section_wrapper-4">
            <div className="social-icons">
              <img src={social1} alt="" />
              <img src={social2} alt="" />
              <img src={social3} alt="" />
              <img src={social4} alt="" />
              <img src={social5} alt="" />
            </div>
            <div className="last-social-icons">
              <img src={social6} alt="" />
            </div>
          </div>
        </section>

        <section className="wrapper-5">
          <div className="text-section_wrapper-5">
            <h1>Что такое СтройКонтроль?</h1>
            <p>
              СтройКонтроль - это интеллектуальная система управления доставкой,
              предоставляющая информацию и контроль материалов на сложных
              строительных площадках в режиме реального времени.
            </p>
          </div>

          <div className="max-container">
            <div className="first-section_wrapper-5">
              <div className="left-section-1_wrapper-5">
                <h4>Отслеживайте доставку по всей цепочке поставок</h4>
                <p>
                  От поставщика до субподрядчика - вы всегда знаете, где
                  находятся ваши материалы, благодаря чему обычные отходы уходят
                  в прошлое и сокращаются несчастные случаи на месте.
                </p>
              </div>
              <div className="right-section-1_wrapper-5">
                <img src={howCars} alt="" />
              </div>
            </div>

            <div className="first-section_wrapper-5">
              <div className="right-section-1_wrapper-5 right-section-2_wrapper-5">
                <img className="test" src={howCars1} alt="" />
              </div>
              <div className="left-section-1_wrapper-5">
                <h4>Оптимизируйте и контролируйте свое прибытие на место</h4>
                <p>
                  Транспортные средства доставки прибывают в фиксированные
                  промежутки времени в заранее назначенные отсеки, где
                  разгрузочное оборудование готово и ждет их.
                </p>
              </div>
            </div>

            <div className="first-section_wrapper-5">
              <div className="left-section-1_wrapper-5">
                <h4>Возьмите под контроль данные в режиме реального времени</h4>
                <p>
                  Интеллектуальная отчетность дает вам возможность принимать
                  решения в зависимости от того, как обстоят дела в данный
                  момент. Больше никаких ручных отчетов по заливке бетона или
                  ежемесячной проверки 10.000 накладных со счетами, все это
                  доступно онлайн без каких-либо усилий.
                </p>
              </div>
              <div className="right-section-1_wrapper-5">
                <img className="miniImg" src={howCars2} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper-6">
          <div className="top-section_wrapper-6">
            <h1>Доставка стала проще</h1>
            <p>
              Мы позаботимся обо всех ваших различных поставках и их
              многочисленных специализированных требованиях к разгрузке.
            </p>
          </div>
          <div className="card-container-wrapper-6">
            <div className="card-wrapper-6">
              <div className="left-section_card-6">
                <img src={wrap_1} alt="" />
              </div>
              <div className="right-section_card-6">
                <h5>Бетон</h5>
                <p>
                  Поставки бетона точно планируются, а его состояние
                  контролируется, что обеспечивает максимально возможное время
                  для установки.
                </p>
              </div>
            </div>

            <div className="card-wrapper-6">
              <div className="left-section_card-6">
                <img src={wrap_2} alt="" />
              </div>
              <div className="right-section_card-6">
                <h5>Утилизация отходов</h5>
                <p>
                  Отходы контролируются и сортируются, а заполненность
                  контейнеров отслеживается в цифровом виде.
                </p>
              </div>
            </div>

            <div className="card-wrapper-6">
              <div className="left-section_card-6">
                <img src={wrap_3} alt="" />
              </div>
              <div className="right-section_card-6">
                <h5>Опалубка</h5>
                <p>
                  Вся опалубка отслеживается от прибытия до отправления, а ее
                  состояние контролируется, что сводит к минимуму потери и
                  повреждения.
                </p>
              </div>
            </div>

            <div className="card-wrapper-6">
              <div className="left-section_card-6">
                <img src={wrap_4} alt="" />
              </div>
              <div className="right-section_card-6">
                <h5>Сборные панели</h5>
                <p>
                  Сборные панели прибывают по очереди, их хранение на месте
                  отслеживается, а их установка планируется и контролируется.
                </p>
              </div>
            </div>

            <div className="card-wrapper-6">
              <div className="left-section_card-6">
                <img src={wrap_5} alt="" />
              </div>
              <div className="right-section_card-6">
                <h5>Фасады</h5>
                <p>
                  Элементы фасада поступают последовательно, их сборка
                  контролируется, а перемещение отслеживается.
                </p>
              </div>
            </div>

            <div className="card-wrapper-6">
              <div className="left-section_card-6">
                <img src={wrap_6} alt="" />
              </div>
              <div className="right-section_card-6">
                <h5>Отделка</h5>
                <p>
                  Материалы поступают точно в срок, маркируются и детально
                  отслеживаются для установки.
                </p>
              </div>
            </div>

            <div className="card-wrapper-6">
              <div className="left-section_card-6">
                <img src={wrap_7} alt="" />
              </div>
              <div className="right-section_card-6">
                <h5>Строительные леса</h5>
                <p>
                  Строительные леса отслеживаются от получения до хранения,
                  использования и возврата, поэтому всегда ясно, что на месте и
                  где.
                </p>
              </div>
            </div>

            <div className="card-wrapper-6">
              <div className="left-section_card-6">
                <img src={wrap_8} alt="" />
              </div>
              <div className="right-section_card-6">
                <h5>Оборудование</h5>
                <p>
                  Оборудование и операторы гарантированно доступны в случае
                  необходимости, а их рабочее состояние отслеживается.
                </p>
              </div>
            </div>

            <div className="card-wrapper-6">
              <div className="left-section_card-6">
                <img src={wrap_9} alt="" />
              </div>
              <div className="right-section_card-6">
                <h5>Электрика и сантехника</h5>
                <p>
                  Доставка осуществляется в точной последовательности для
                  сложной установки, что сокращает или устраняет необходимость в
                  хранении.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom-section_wrapper-6">
            <p>
              ... <span>и все остальные материалы,</span> которые поступают или
              покидают вашу площадку
            </p>
          </div>
        </section>

        <section className="wrapper-7">
          <div className="top-section_wrapper-7">
            <h1>Надёжность</h1>
            <p>
              Благодаря надёжному строительству выигрывают все - муниципальные
              органы выполняют свои обязанности перед гражданами, инвесторы
              получают сертификаты своих проектов, а генеральные подрядчики
              получают повышенную репутацию.
            </p>
          </div>

          <div className="card-container_wrapper-7">
            <div className="card_wrapper-7">
              <img src={micro1} alt="" />
              <div className="card-body-7">
                <h4>Сниженное загрязнение</h4>
                <p>
                  При оптимизации логистики требуется меньше поездок, что
                  приводит к снижению выбросов CO2. Выбрасываемый CO2
                  контролируется, что позволяет ставить цели и вносить ощутимые
                  улучшения.
                </p>
              </div>
            </div>

            <div className="card_wrapper-7">
              <img src={micro2} alt="" />
              <div className="card-body-7">
                <h4>Улучшенное управление отходами</h4>
                <p>
                  Упрощается сортировка отходов, автоматизируется утилизация
                  отходов, а поврежденные материалы при необходимости
                  используются повторно, что снижает затраты и стимулирует
                  переработку и повторное использование.
                </p>
              </div>
            </div>

            <div className="card_wrapper-7">
              <img src={micro3} alt="" />
              <div className="card-body-7">
                <h4>Улучшенное влияние на общество</h4>
                <p>
                  Уменьшаются проблемы с дорожным движением и шумовое
                  загрязнение, что улучшает жизнь местного сообщества.
                  Улучшенное обращение с материалами и хранение означает, что
                  рабочие также лучше защищены.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom-section_wrapper-7">
            <div className="box-1">
              <div className="left-section_box-1">
                <img src={construc} alt="" />
                <h4>
                  Надёжная конструкция СтройКонтроль входит в стандартную
                  комплектацию.
                </h4>
              </div>
              <button>Подробнее</button>
            </div>
          </div>
        </section>
      </div>

      <section className="wrapper-8">
      <div className="container">
        <div className="all-max_left">
          <div className="top-section_wrapper-8">
            <div className="left-section_wrapper-8">
              <h2>Создан для строительства</h2>
              <div className="text-section_wrapper-8">
                <div className="list">
                  <li>
                    <span>Хорошо виден в любых условиях</span>
                  </li>
                  <p>
                    Независимо от того, солнечно или темно, найдется подходящий
                    режим экрана
                  </p>
                </div>

                <div className="list">
                  <li>
                    <span>Поддержка международных языков</span>
                  </li>
                  <p>
                    На современной стройке работают люди со всего мира. Язык не
                    является проблемой для СтройКонтроля.
                  </p>
                </div>

                <div className="list">
                  <li>
                    <span>
                      Работает на любом устройстве - мобильном телефоне,
                      планшете, ноутбуке
                    </span>
                  </li>
                  <p>
                    Люди на разных должностях используют разные устройства.
                    СтройКонтроль автоматически настраивается в соответствии с
                    требованиями. Вы также можете проецировать панели
                    мониторинга живого проекта на настенные экраны.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-section_wrapper-8">
              <img src={backg1} alt="" />
            </div>
          </div>

          <div className="btn-Fnc">
            <button>Заказать демо</button>
            <button>Подробнее</button>
          </div>
        </div>

        <div className="max-new">
          <div className="card-container_wrapper-8">
            <div className="card_wrapper-8">
              <img src={howControl} alt="" />
              <div className="card-body-8">
                <h4>Привлечение субподрядчика</h4>
                <p>
                  Для выполнения этой работы вам понадобятся ваши субподрядчики.
                  У нас есть проверенный и надежный процесс для этого.
                </p>
              </div>
            </div>

            <div className="card_wrapper-8">
              <img src={howControl1} alt="" />
              <div className="card-body-8">
                <h4>Привлечение субподрядчика</h4>
                <p>
                  Для выполнения этой работы вам понадобятся ваши субподрядчики.
                  У нас есть проверенный и надежный процесс для этого.
                </p>
              </div>
            </div>

            <div className="card_wrapper-8">
              <img src={howControl2} alt="" />
              <div className="card-body-8">
                <h4>Привлечение субподрядчика</h4>
                <p>
                  Для выполнения этой работы вам понадобятся ваши субподрядчики.
                  У нас есть проверенный и надежный процесс для этого.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className="all">
        <section className="wrapper-9">
          <div className="left-section_wrapper-9">
            <h1>Как с нами работать</h1>
            <p>
              Начать работу со СтройКонтроль легко, достаточно заказать
              демо-версию.
            </p>
            <img src={howsworking} alt="" />
          </div>

          <div className="right-section_wrapper-9">
            <div className="card-wrapper-6 card-wrapper-9">
              <div className="left-section_card-9">
                <p className="ol-list">1</p>
              </div>
              <div className="right-section_card-6">
                <h5>Заказать демо</h5>
                <p>
                  Вы увидите презентацию, в которой подробно объясняется, как
                  работает СтройКонтроль для решения задач строительной
                  логистики в таких сложных проектах, как ваш.
                </p>
              </div>
            </div>

            <div className="card-wrapper-6 card-wrapper-9">
              <div className="left-section_card-9">
                <p className="ol-list">2</p>
              </div>
              <div className="right-section_card-6">
                <h5>Согласование сделки</h5>
                <p>
                  Мы обсудим ваш строительный проект и предложим реализацию
                  СтройКонтроль, которая идеально соответствует вашим
                  потребностям и будет иметь для вас ценность.
                </p>
              </div>
            </div>

            <div className="card-wrapper-6 card-wrapper-9">
              <div className="left-section_card-9">
                <p className="ol-list">3</p>
              </div>
              <div className="right-section_card-6">
                <h5>Подготовка</h5>
                <p>
                  Мы полностью обучаем вашу команду тому, как использовать
                  систему, с помощью онлайн-видеоуроков и обеспечиваем
                  постоянную всестороннюю поддержку.
                </p>
              </div>
            </div>

            <div className="card-wrapper-6 card-wrapper-9">
              <div className="left-section_card-9">
                <p className="ol-list">4</p>
              </div>
              <div className="right-section_card-6">
                <h5>Внедрение и интеграция</h5>
                <p>
                  Мы настраиваем программное обеспечение так, чтобы оно точно
                  моделировало вашу площадку, а затем помогаем вам интегрировать
                  его с программным обеспечением Business Intelligence для
                  получения новых мощных аналитических данных.
                </p>
              </div>
            </div>

            <div className="btn-Fnc-2">
              <button className="firstBtnMain">Заказать демо</button>
              <button className="lastBtnMain">Подробнее</button>
            </div>
          </div>
        </section>

        <section className="wrapper-10">
          <div className="top-section_wrapper-10">
            <div className="text-section-top_wrapper-10">
              <h1>Почему нужно выбрать нас?</h1>
              <p>
                В строительной логистике всегда есть возможности для улучшения.
              </p>
            </div>
          </div>

          <div className="card-container_wrapper-10">
            <div className="right-section_wrapper-9">
              <div className="card-wrapper-6 card-wrapper-9">
                <div className="left-section_card-9">
                  <img src={po1} alt="" />
                </div>
                <div className="right-section_card-6">
                  <h5>Отмеченное наградами ПО</h5>
                  <p>
                    Всемирно известное программное обеспечение, признанное
                    государственными учреждениями, инновационными группами и
                    техническими организациями
                  </p>
                </div>
              </div>

              <div className="card-wrapper-6 card-wrapper-9">
                <div className="left-section_card-9">
                  <img src={po1} alt="" />
                </div>
                <div className="right-section_card-6">
                  <h5>Большой потенциал</h5>
                  <p>
                    Входит в топ-25 самых многообещающих стартапов ConTech по
                    версии Cemex Ventures, Moscow Consulting Group, BuiltWorld и
                    PwC
                  </p>
                </div>
              </div>

              <div className="card-wrapper-6 card-wrapper-9">
                <div className="left-section_card-9">
                  <img src={po1} alt="" />
                </div>
                <div className="right-section_card-6">
                  <h5>Выбор лидеров рынка</h5>
                  <p>
                    Рекомендуемый поставщик технологий для 3 из 10 ведущих
                    генеральных подрядчиков в Европе
                  </p>
                </div>
              </div>

              <div className="card-wrapper-6 card-wrapper-9">
                <div className="left-section_card-9">
                  <img src={po1} alt="" />
                </div>
                <div className="right-section_card-6">
                  <h5>Устойчивое развитие и безопасность</h5>
                  <p>
                    Способствует снижению выбросов CO2 и повышает безопасность
                    на месте
                  </p>
                </div>
              </div>
            </div>

            <div className="left-section_wrapper-9">
              <div className="inform">
                <div>
                  <img className="kavichk" src={kavichki} alt="" />
                  <h1>
                    Мы видим огромный потенциал в таких решениях, как
                    СтройКонтроль, и хотим использовать их для улучшения наших
                    строительных процессов.
                  </h1>
                </div>
                <div className="inform-btn">
                  <img src={avatar} alt="" />
                  <div className="text-info-otziv">
                    <h5>Волков Матвей</h5>
                    <span>Генеральный директор ООО “СпецСтрой”</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper-11">
          <div className="bottom-section_wrapper-4">
            <div className="social-icons copy-concat">
              <img src={group1} alt="" />
              <img src={group2} alt="" />
              <img src={group3} alt="" />
            </div>
            <div className="last-social-icons">
              <img src={group4} alt="" />
            </div>
          </div>
        </section>

        <section className="wrapper-12">
          <h1>
            Готовы оптимизировать логистику доставки для вашего сложного
            проекта?
          </h1>
          <div className="btn-Fnc-2">
            <button className="firstBtnMain">Заказать демо</button>
            <button className="lastBtnMain-12">Связаться с нами</button>
          </div>
        </section>

        <footer>
          <div class="footer_section">
            <div class="footer_section-1">
              <div class="left-section_footer">
                <img src={logo1} alt="" />
                <p className="city-li">г. Москва <br/> Пресненская наб., 88, оф. 527</p>
                <p className="contact-li">info@stroycontrol.ru +7 (945) 123-45-67</p>
              </div>
                <ul>
                  <li id="first-ul-footer"><b>Наш продукт</b></li>
                  <li>Процесс</li>
                  <li>Продукция</li>
                </ul>

                <ul>
                  <li id="first-ul-footer"><b>Обслуживание</b></li>
                  <li>Клиенты</li>
                  <li>Клиенты</li>
                </ul>

                <ul>
                  <li id="first-ul-footer"><b>Компания</b></li>
                  <li>О нас</li>
                  <li>Связаться с нами</li>
                </ul>
            </div>
            <div className="line-row-1"></div>
            <div className="section-2_footer">
              <div className="left-section-2_footer">
                <p>© 2020 СтройКонтроль, Все права защищены. Политика конфиденциальности</p>
              </div>
              <div className="right-section-2_footer">
                <p>Политика конфиденциальности</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
