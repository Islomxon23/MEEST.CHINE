  import React from 'react'
  import '../css/nav.css'
  import {Link} from 'react-router-dom'
  import '../css/btn.css'


  $(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

  });


  export default function firstpage() {
    return (
    <div className='nav'>
        <div className='div'>
                <div>
                <select class="form-select" aria-label="Default select example">
                              <option selected>UZ</option>
                              <option value="1">UK</option>
                              <option value="2">PL</option>
                          </select>
                </div>

                <div className='cla'>
                    <div className='div1'>
                    <p>Do'konga</p>
                    <p>Taobao</p>
                    <p>1688</p>
                    <p>Pinduoduo</p>
                    <p>POIZON</p>
                    <p>Xarid to'lovi tariflari</p>
                    <p>Mahsulot qidirish</p>
                    <p>Ko'rsatma</p>
                    <p>Xitoydan Qozog'istonga yetkazib berish</p>
                  </div>

                  <div className='div2'>
                    <p>$USD</p>
                    <p>UZ/RU</p>
                  </div>
                </div>
        </div>

        <div className='birinchi'>
            <div className='btn1'>
            <img src="https://uz.meest.cn/static/img/logo.d5df1f710652.svg" alt="" />
            </div>
            <div className='btn11'>
                  <div className='btn12'>
                  <a href="">Tarif va xizmatlar</a>
                <a href="">Yetkazib berishni rasmiylashtirish</a>
                <a href="">Bojxonadan o'tkazish</a>
                  </div>
                  <div className='btn13'>
                  <a href="">FAQ va maslahatlar</a>
                <a href="">Fikrlar</a>
                <a href="">Bog'lanish</a>
                <a href=""><i class="fa-solid fa-cart-shopping"></i>Tijoratyuklari</a>
                  </div>
            </div>
            

            
            
            
            
            
            
            
            <div className='qww'>
                    <div className='fa'>
                          <button><i class="fa-solid fa-phone"></i></button>
                          <button><i class="fa-solid fa-message"></i></button>
                    </div>
                      
                      <div className='fa1'>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
<i class="fa-solid fa-magnifying-glass"></i>
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>






                      <Link to="/userdashboard">
                          <button className='bvc'><i class="fa-solid fa-user"></i></button>
                      </Link>



                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                        <i class="fa-solid fa-bars-staggered"></i>
                        </button>

<div class="offcanvas offcanvas-top h-100" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
      <h1>Mahsulotlarni sotib olish</h1>
        <div className='song'>
                <a href="">
                <div className='song1'>
                  <h6>Do'konga</h6>
                  <i class="fa-solid fa-angle-right"></i>
              </div>
                </a>

              <a href="">
              <div className='song1'>
                  <h6>Buyurtmani rasmiylashtirish</h6>
                  <i class="fa-solid fa-angle-right"></i>
              </div>
              </a>

              <a href="">
              <div className='song1'>
                  <h6>Xaridorlarga maslahatlar</h6>
                  <i class="fa-solid fa-angle-right"></i>
              </div>
              </a>

              <a href="">
              <div className='song1'>
                  <h6>1688</h6>
              <i class="fa-solid fa-angle-right"></i>
              </div>
              </a>

              <a href="">
              <div className='song1'>
                <h6>Taobao</h6>
              <i class="fa-solid fa-angle-right"></i>
              </div>
              </a>

              <a href="">
              <div className='song1'>
                <h6>Pinduoduo</h6>
              <i class="fa-solid fa-angle-right"></i>
              </div>
              </a>
        </div>
        <h1>Yetkazib berish</h1>
        <div className='sonj'>
            <a href="">
            <div className='sonj1'>
              <h6>Yetkazib berishni rasmiylashtirish</h6>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            </a>

            <a href="">
            <div className='sonj1'>
              <h6>Tarif va xizmatlar</h6>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            </a>

            <a href="">
            <div className='sonj1'>
              <h6>Bojxonadan o'tkazish</h6>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            </a>

            <a href="">
            <div className='sonj1'>
              <h6>FAQ va maslahatlar</h6>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            </a>

            <a href="">
            <div className='sonj1'>
              <h6>Biz haqimizda</h6>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            </a>

            <a href="">
            <div className='sonj1'>
              <h6>Fikrlar</h6>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            </a>

            <a href="">
            <div className='sonj1'>
              <h6>Aloqa</h6>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            </a>

            <a href="">
            <div className='sonj1'>
              <h6>Tijorat yuklari</h6>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            </a>

            <a href="">
            <div className='sonj1'>
              <h6>Ko'rsatma</h6>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            </a>

            <a href="">
            <div className='sonj1'>
              <h6>Reklamatsiya siyosati</h6>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            </a>
        </div>
        
        <h1>Hududlar</h1>
          <div className='tag'>
                  <a href="">
                    <div className='tag1'>
                      <h6>UA</h6>
                      <img src="https://uz.meest.cn/static/svg/flags/ua.svg" alt="" />
                    </div>
                  </a>
                  <a href="">
                    <div className='tag2'>
                      <h6>UZ</h6>
                      <img src="https://uz.meest.cn/static/svg/flags/uz.svg" alt="" />
                    </div>
                  </a>
                  <a href="">
                    <div className='tag3'>
                      <h6>PL</h6>
                      <img src="https://uz.meest.cn/static/svg/flags/pl.svg" alt="" />
                    </div>
                  </a>
          </div>

          <div className='lab'>
          <input type="radio" class="btn-check w-25" name="options-base" id="option5" autocomplete="off" checked />
          <label class="btn w-45" id='ababb' for="option5">UZ</label>

          <input type="radio" class="btn-check w-25" name="options-base" id="option5" autocomplete="off" checked />
          <label class="btn" id='abab' for="option5">RU</label>
          </div>
  </div>
</div>
 


                      </div>
                      



                  <div className='qww1'>
                      <Link to="/userdashboard">
                          <button className='bvc'><i class="fa-solid fa-user"></i><br />Kirish </button>
                      </Link>
                  </div>
            </div>
        </div>

        <div className='urta'>
          <div className='bir'>
              <div className='in'>
                <h5>Jo'natmani kuzatish</h5>
                <div className='lol'>
                  <input type="text" placeholder='Xalqaro raqam'/>
                  <button><i class="fa-solid fa-circle-play"></i></button>
                </div>
              </div>
              <div className='in'>
                <h5>Jo'natmani kuzatish</h5>
                <div className='lol'>
                  <input type="text" placeholder="Xitoy bo'yicha trek-raqam"/>
                  <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
              </div>
              <div className='asws'>
                <div className='ase'>
                  <i class="fa-solid fa-clock"></i>
                  <h5>Jo'natmalar yetib kelish <br /> grafigi</h5>
                </div>
                <div className='ass'>
                  <p>Xitoydan</p>
                  <p>Toshkentda</p>
                  <p>Holati</p>
                </div>
                <div className='asw'>
                  <h6>14 Mar</h6>
                  <h6>	25 Mar</h6>
                  <h6>	Yetib keldi</h6>
                </div>
                <div className='asw'>
                  <h6>19 Mar</h6>
                  <h6>	28 Mar</h6>
                  <h6>Yo'lda</h6>
                </div>
                <div className='asw'>
                  <h6>21 Mar</h6>
                  <h6>30 Mar</h6>
                  <h6>Yo'lda</h6>
                </div>
                <div className='asw'>
                  <h6>26 Mar</h6>
                  <h6>	04 Apr</h6>
                  <h6>Yo'lda</h6>
                </div>
                <div className='asw'>
                  <h6>28 Mar</h6>
                  <h6>06 Apr</h6>
                  <h6>Rejalashtirildi</h6>
                </div>
                <div className='asw'>
                  <h6>02 Apr</h6>
                  <h6>11 Apr</h6>
                  <h6>Rejalashtirildi</h6>
                </div>
                <div className='asw'>
                  <h6>04 Apr</h6>
                  <h6>	13 Apr</h6>
                  <h6>Rejalashtirildi</h6>
                </div>
                <div className='asw'>
                  <h6>09 Apr</h6>
                  <h6>18 Apr</h6>
                  <h6>Rejalashtirildi</h6>
                </div>
                <div className='wee'>
                <a href="">Barcha jo'nashlar</a>
                </div>
              </div>
          </div>

          <div className='ert'>
                      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                <div class="carousel-inner">
                  <div class="carousel-item active car_div1">
                    <h3>Xitoydan<br />Tovarlar sotib <br />Olamiz va <br />yetkazib <br />beramiz </h3>
                    <p>Biz Xitoydan O'zbekistonga hamma narsani yetkazib beramiz, <br /> sumkadan telefongacha Taobao, 1688, <br />Pinduoduo va boshqa do'konlar</p>
                      <div className='but'>
                        <button id='btnzag'>Do'konga</button>
                        <button id='btnzag1'>Ro'yxattan o'tish</button>
                      </div>
                  </div>
                  <div class="carousel-item car_div2">
                    <h2>Meest China o'z <br /> chegaralarini <br /> kengaytiradi</h2>
                    <p>Endi Xitoydan Qozog'istonga yetkazib beramiz!</p>
                    <div className='but1'>
                      <button id='btnbig'>Buyurtma yetkazib berish</button>
                      <button id='btnzag1'>Ro'yxattan o'tish</button>
                    </div>
                  </div>
                  
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
          </div>

        </div>
        <div className='ikkinchi'>
        <div class="container ">
          <div class="row row1">
            <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
                    <div class="MultiCarousel-inner">
                        <div class="item">
                          <div className='dives'>
                              <div className='das'>
                              <i class="fa-solid fa-truck"></i>
                            <h4>$8/kg dan</h4>
                              </div>
                              <h4>Avto orqali-yetkazib <br /> berish</h4>
                              <div className='das1'>
                              <i class="fa-regular fa-circle-check"></i>
                              <p>18-20 kun</p>
                              </div>
                              <div className='das2'>
                              <i class="fa-regular fa-circle-check"></i>
                              <p>haftada 1 marta <br /> (Seshanba)</p>
                              </div>
                              <button>Batafsil</button>
                          </div>
                        </div>
                        <div class="item">
                        <div className='dives1'>
                              <div className='das'>
                              <i class="fa-solid fa-truck"></i>
                            <h4>Individual <br />hisoblash</h4>
                              </div>
                              <h4>Xitoydan O'zbekistonga <br />kargo</h4>
                              <div className='das1'>
                              <i class="fa-regular fa-circle-check"></i>
                              <p>30 kg dan ortiq</p>
                              </div>
                              <div className='das2'>
                              <i class="fa-regular fa-circle-check"></i>
                              <p>18 kundan boshlab</p>
                              </div>
                              <button>Batafsil</button>
                          </div>
                        </div>
                        <div class="item">
                        <div className='dives2'>
                              <div className='das'>
                              <i class="fa-solid fa-truck"></i>
                            <h4>10% partiya <br />narxida</h4>
                              </div>
                              <h4>Xitoydan O'zbekistonga <br />kargo</h4>
                              <p>Biz Xitoydan tovarlarni topamiz, <br />tekshiramiz,sotib olamiz <br />qadoqlaymiz va rasmiy ravishda <br />tayyorr holatta yetkazib beramiz</p>
                              <button>Batafsil</button>
                          </div>
                        </div>
                        <div class="item">
                        <div className='dives3'>
                              <div className='das'>
                              <i class="fa-solid fa-truck"></i>
                            <h4>$10/kg dan</h4>
                              </div>
                              <h4>O'zbekistonga havo</h4>
                              <div className='das1'>
                              <i class="fa-regular fa-circle-check"></i>
                              <p>8-10 kun</p>
                              </div>
                              <div className='das2'>
                              <i class="fa-regular fa-circle-check"></i>
                              <p>Haftada 2 marta <br />(Seshanba,pays)</p>
                              </div>
                              <button>Batafsil</button>
                          </div>
                        </div>
                        
                      
                      </div>
                      <button class="btn btn-primary rightLst"><i class="fa-solid fa-angle-right"></i></button>
                      <button class="btn btn-primary  leftLst"><i class="fa-solid fa-angle-left"></i>  </button>
                  </div>
            </div>
          
          </div>
          </div>

            

          <div className='rez'>
              <div className='rez1'>
                  <h2>Taobaoda qanday <br />qilib xarid qilish</h2>
                  <button>Ko'rsatmalarga o'ting</button>
              </div>
              <div className='rez2'>
                <h2>Meest China Shopda <br />qanday qilib xarid qilish</h2>
                <button>Ko'proq</button>
              </div>
          </div>

          <div className='www'>
            <div className='www1'>
              <h1>Mahsulotlarni <br />O'zbekistondan <br />800% gacha arzonroq <br /> sotib oling</h1>
            </div>
            <div className='www2'>
                <h4>Mustaqil</h4>
                <p>Xitoyning Taobao, 1688, Tmall kabi veb <br /> sahifalarida. Siz buyurtma berasiz, biz <br /> mahsulotni Xitoydagi omborimizga qabul <br /> qilamiz va qo'lingizga yetkazib beramiz</p>
                <p><i class="fa-solid fa-circle-exclamation"></i>  Birinchi marta mustaqil harid <br /> qilayotganlar uchun qo'llanma tayyorladik</p>
                <button>Tanishish</button>
            </div>
            <div className='www3'>
                <h4>Mist China Shop orqali</h4>
                <p>Orqali Mahsulotlarni Xitoy va boshqa <br /> mamlakatlar internet do'konlaridan sotub <br /> oling. Haridni amalga oshirish va savdogarlar <br /> bilan suhbatlashish uchun Google tarjimon <br /> ishlatmang. Buning barchasini siz uchun biz amalga oshiramiz.</p>
                <p><i class="fa-solid fa-circle-exclamation"></i> Buning uchun yuqori o'ng burchakda <br /> Kirish tugmachasini bosing va ro'yxatdan <br /> o'ting</p>
                <button>Do'konga</button>
            </div>
          </div>

          <div className='aaa'>
              <div className='aaw'>
                    <div className='aaa1'>
                      <h2>Yuk tashish narxini hisoblang *</h2>
                      <div>
                        <button>O'zim uchun</button>
                        <button>Tijorat</button>
                      </div>
                    </div>
                    <div className='aaa2'>
                          <div className='zax'>
                                <h5>1. Yetkazib berish</h5>
                                <h6>Xitoydan</h6>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                  <label class="form-check-label" for="flexRadioDefault1">
                                        <h6>Avia</h6>
                                  </label>
                                  <p>8-10 kun. Bir jo'natmada 2 tagacha markali tovar</p>
                                </div>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                  <label class="form-check-label" for="flexRadioDefault2">
                                      <h6>Avto</h6>
                                  </label>
                                  <p>18-20 kun</p>
                                </div>
                                  <h6>O'zbekiston bo'ylab</h6>
                                  <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault11"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                      <h6>Kuryer orqali</h6>
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault11" checked/>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                      <h6>Toshkentdagi bo'limga</h6>
                                    </label>
                                  </div>
                          </div>


                          <div className='zax1'>
                              <h5>2.Ombor xizmatlari</h5>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    <h6>Bir urinishda yuborish</h6>
                                </label>
                                <p>Tekshiruvsiz. Saqlashsiz.Jo'natma qay holatda omborga kelgan bo'lsa, shu holda darhol yuborish</p>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    <h6>Birlashtirish/Ajratish</h6>
                                </label>
                                <p>Omborda saqlash. Boshqa tovarlar bilan birlashtirish yoki bitta jo'natmani bir nechtaga ajratish</p>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                                <label class="form-check-label" for="flexRadioDefault3">
                                    <h6>Birlashtirish/Ajratish + tekshiruv</h6>
                                </label>
                                <p>Omborda saqlash. Boshqa tovarlar bilan birlashtirish yoki bitta jo'natmani bir nechtaga ajratish. Rasmga muvofiqligi soni va yaroqliligini tekshirish</p>
                              </div>
                          </div>


                          <div className='zax2'>
                              <h5>3. Jo'natma parametrlari</h5>
                                <h6>Haqiqiy og'irlik</h6>
                                <div className='lik'>
                                    <div className='lik1'>
                                      <h2>3</h2>
                                      <h2>KG</h2>
                                    </div>
                                    <input type="range" class="form-range" id="customRange1"></input>
                                </div>
                                <h6>Hajmli yuk uchun to'lashim kerakmi?</h6>
                                <p>Agar jo'natmaning hajmiy og'irligi haqiqiy og'irligidan 2 marta katta bo'lsa, hisoblangan og'irlik quyidagi formula asosida aniqlanadi: (hajmiy og'irlik - haqiqiy og'irlik)/2 + haqiqiy og'irlik.</p>
                                <a href="">+ Hajmno ko'rsatish</a>
                          </div>


                          <div className='zax3'>
                                <h1>39$*</h1>
                                <p>39.00$ yetkazib berish uchun <br />va 0.00$ quti uchun</p>
                                <a href="">+ Mahsulotlarni sotib olish</a>
                          </div>
                          

                    </div>
                    <p>*Bazaviy tarif asosida yetkazib berishning tahminiy qiymatini hisoblaymiz. Narx tarif rejasi va qadoqlangan tayyor jo'natmaning haqiqiy og'irligiga bog'liq holda o'zgaradi.</p>

              </div>
          </div>

          <div className='Yetkazib'>
                <div className='yet'>
                      <div className='yet1'>
                          <h1>Yetkazib berish qanday ishlaydi</h1>
                      </div>


                      <div className='yet2'>
                            <p>1 <br /> 2</p>
                            <div>
                            <p>Istalgan Xitoy do'konidan <br /> mahsulotni sotib olasiz</p>
                          <p>Bizning ombor manzilini <br /> ko'rsatasiz va biz sizning <br /> o'rningizga Xitoyda <br /> mahsulotingizni olamiz</p>
                            </div>
                      </div>


                      <div className='yet3'>
                      <div className='yet2d'> 
                              <p>3 <br />4</p>
                            </div>
                          <div>
                            <p>Samolyot orqali O'zbekistonga <br /> yuboramiz</p>
                            <p>O'zbekiston bo'ylab <br /> jo'natmangizni yetkazib beramiz: <br /> kuryer orqali qo'lingizga yoki <br /> Toshkentdagi bo'limga</p>
                          </div>
                          
                      </div>
                      <button>Batafsil</button>

                </div>
          </div>

          <div className='Tanish'>
              <div className='nish'>
                    <h2>Mahsulotlarni to'g'ri rasmiylashtirish</h2>
                    <button>Tanishish</button>
              </div>
              
              <div className='nish1'>
                  <h2>Boshqa mahsulot kelsa <br />nima qilish <br />kerak va buning oldini olish</h2>
                  <button>Batafsil</button>
              </div>
          </div>

          <div className='mijozlar'>
                <div className='mijoz'>
                    <div className='joz'>
                        <h3>Biz mijozlar  qadrlaydigan yetkazib  berish xizmatini yaratdik</h3>
                          <div className='wer'>
                          <div className='wer1'>
                          <h3>40 000+</h3>
                          <p>Mijozlar</p>
                          </div>
                          <div>
                            <h3>1 000 000+</h3>
                            <p>muvaffaqiyatli yetkazib berilgan jo'natmalar</p>
                        </div>
                          </div>
                    </div>


                    <div className='joz1'>
                        <h4>100% qulaylik</h4>
                        <div>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>turli sotuvchilardan olingan  mahsulotlarni bitta jo'natmaga  birlashtirish</p>
                        </div>

                        <div>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>xitoyning yopiq internet do'konlaridan  mahsulot sotib olish</p>
                        </div>
                        
                        <div>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Meest China shaxsiy kabinet orqali  jo'natmalarni boshqarish</p>
                        </div>
                    </div>


                    <div className='joz2'>
                        <h4>100% mutaxassislik</h4>
                        <div>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Guanchjouda 5000 m2 li xususiy ombor</p>
                        </div>
                        
                        <div>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Xitoy bilan biznes yuritishdagi 15 yillik tajriba</p>
                        </div>

                        <div>
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Buyurtmaning barcha bosqichlarida mijozni  qo'llab quvvatlash</p>
                        </div>
                    </div>


                    <div className='joz3'>
                          <h4>100% xavfsizlik</h4>
                          <div>
                          <i class="fa-regular fa-circle-check"></i>
                          <p>Mahsulotlar yaroqliligini  tekshirish</p>
                          </div>

                          <div>
                          <i class="fa-regular fa-circle-check"></i>
                          <p>sifatli qadoq</p>
                          </div><br />

                          <div>
                          <i class="fa-regular fa-circle-check"></i>
                          <p>to'liq sug'urta</p>
                          </div>
                    </div>
                </div>
          </div>

          <div className='ombor'>
              <div className='ombor1  '>
                  <h2>Guanchjoudagi zamonaviy xususiy ombor</h2>
                  <p>Xitoyda barcha jo'natmalaringiz saqlanadigan 5000 m2 li o'z xususiy omborimizga <br /> egamiz. Shuningdek ombor xizmatlarini ham taklif etamiz.</p>
                  <div className='ej overflow-auto'>
                        <div className='tttt'>
                          <img src="https://uz.meest.cn/documents/6/stock-1.svg" alt="" />
                          <div className='bnm'>
                          <h3>Birlashtirish 0,2$/kg</h3><br />
                          <p>Yetkazib berish harajatlarini tejash uchun turli yetkazib beruvchilar <br /> mahsulotlarini birlashtiramiz</p>
                          </div>
                        </div>

                        <div className='tttt'>
                              <img src="https://uz.meest.cn/documents/7/stock-2.svg" alt="" />
                                <div className='bnm1'>
                                  <h3>Ajratish 0,2$/kg</h3>
                                  <p>Bojxona talablaridan oshmaslik va bir nechta oluvchilarga yetkazib berish <br /> uchun jo'natmani qismlarga ajratamiz</p>
                                </div>
                        </div>

                        <div className='tttt'>
                          <img src="https://uz.meest.cn/documents/8/stock-3.svg" alt="" />
                            <div className='bnm2'>
                              <h3>Tayyor yuk</h3>
                              <p>Jo'natmani yetkazib beruvchidan olingan holatda yaroqlilik tekshiruvisiz <br /> va boshqa jo'natmalar bilan birlashtirmay yetkazib beramiz</p>
                            </div>
                        </div>
                  </div>
                  <button>Batafsil</button>
              </div>


              <div className='ombor2'>
                  <img src="https://uz.meest.cn/media/images/Frame_24.width-667.png" alt="" />
              </div>
          </div>

          <div className='ega'>
              <h2>Bu qanday ko'rinishga ega</h2>
                <div className='ega1 overflow'>
                    <div className='poi'>
                          <a href="">
                              <div className='jjh'>
                              <i class="fa-solid fa-circle-play"></i>
                            </div>
                          </a>
                        <a href="">Xitoyda fotochek bilan batafsil tekshirish</a>
                    </div>
                    <div className='pol'>
                          <a href="">
                            <div className='jhh'>
                                <i class="fa-solid fa-circle-play"></i>
                            </div>
                          </a>
                        <a href="">Elementlarni bitta paketga birlashtirish oson</a>
                    </div>
                </div>
          </div>

          <div className='fgg '>
                <h2>Voqealar</h2>
                <div className='fgh overflow'>
                    <div className='fgh1'>
                        <a href="">
                          <div className='fghh'>
                          <i class="fa-solid fa-circle-play"></i>
                          </div>
                        </a>
                        <a href="">Е-commerce rivojlanishiga bag'ishlangan "KELAJAK MARKETPLEYSLAR ORTIDA" Luna <br /> Business Solutions birinchi yirik biznes-forumi bo'lib o'tdi</a>
                    </div>
                    <div className='fgh2'>
                        <a href="">
                              <div className='fghj'>
                          <i class="fa-solid fa-circle-play"></i>
                              </div>
                            </a>
                            <a href="">2023 yil uchun bayram taqvimi</a>
                    </div>
                </div>
          </div>

          <div className='yangi'>
                <div className='yangii'>
                      <div className='var'>
                            <h1>Xitoydagi yangi Meest China ombori</h1>
                            <p>Biz ombor va logistika jarayonlariga innovatsion yondashuv bilan yuqori <br /> darajadagi xizmat ko'rsatish standartlarini qoʻllab-quvvatlaymiz!</p>
                      </div>

                      <div className='var1'>
                      <i class="fa-solid fa-circle-play"></i>
                      </div>
                </div>
          </div>

          <div className='yangi1'>
                  <div className='yangii'>
                      <div className='ber'>
                          <h1>Men Meest China bilan <br /> ishlayman. Chunki bu qulay <br /> va foydali</h1>
                          <p>Valeriya, Meest China mijozi</p>
                      </div>
                      <div className='ber1'>
                      <i class="fa-solid fa-circle-play"></i>
                      </div>
                  </div>
          </div>

          <div className='blog'>
              <h1>Blog</h1>
              <div className='blog1'>
                    <div className='blog2'>
                        <div className='bll'>
                              <p>9 Aprel 2024</p>
                              <a href="">Hurmatli Meest China xizmati mijozlari</a>
                              <p>Ramazon Hayit bayrami munosabati bilan O'zbekistondagi ofis ish jadvalidagi <br /> o'zgarishlarga e'tibor qaratishingizni so'raymiz.</p>
                        </div>
                        <div className='ish'>
                                <p>2 Aprel 2024</p>
                                <a href="">Munosabati bilan Xitoydagi Meest China omborining ish vaqti</a>
                                <p>Sinmin bayrami (Vafot etganlarni xotirlash kuni) munosabati bilan Xitoydagi Meest China <br /> omborining ish vaqti haqida eslatib o'tamiz.</p>
                        </div>
                        <button>Barcha nashrlar</button>
                    </div>

                    <div className='blog3'>
                          <div className='bbn'></div>
                          <p>Meest Chinaning Kievdagi vakolatxonasi haqida</p>
                          <div className='min'>
                                <div className='min1'>
                                      <p>26 Aprel 2024</p>
                                      <a href="">O‘zbekistonga posilka yetkazib berish bo‘yicha yangi tariflar</a>
                                </div>
                                <div className='min2'>
                                  <p>18 Aprel 2024</p>
                                  <a href="">Xitoyda 1-maydan 4-maygacha boʻlgan vaqt uchun omborlarning ishlash tartibi</a>
                                </div>
                                <button>Barcha nashrlar</button>
                        </div>
                    </div>

                        

              </div>
          </div>

          <div className='oddiy'>
                    <div className='oddiy1 overflow-auto'>
                              <div className='ccv'>
                                      <h6>Xitoyda xarid qilish: hamma narsa oson va oddiy!</h6>
                                      <p>Bugungi kunda Xitoy mahsulotlari mahalliy do'konlar assortimentining deyarli 80% ni tashkil qiladi. Bu, birinchi navbatda, ularni <br /> sotib olishning arzonligi bilan bog'liq. Hattoki, mamlakatga olib kirish va bojxona rasmiylashtiruvi xarajatlarini hisobga olsak ham, <br /> bunday tovarlarning yakuniy narxi O‘zbekistonda ishlab chiqarilgan mahsulotlardan bir necha barobar arzon. Bundan tashqari, <br /> eksklyuziv niqobi ostida bizga sotib oladigan va sotadigan mahalliy savdogarlardan farqli o'laroq, rangi, tuzilishi yoki shakli bilan <br /> cheklanmasdan tanlash imkoniyati mavjud.</p>
                                      <p>Internet rivoji tufayli endi oddiy iste’molchilar ham xaridorgir tovarlarni savdo maydonchalarida bemalol xarid qilishlari mumkin, <br /> Xitoydan yetkazib berish xizmati esa xaridingizni O‘zbekistonga zudlik bilan olib keladi.</p>
                                      <p>Xitoydagi tanlovning ko'pligi</p>
                                      <p>Internet sanoati to'xtamaydi va bugungi kunda siz "hamma narsani" va "har qanday joyni" osongina topishingiz va buyurtma <br /> berishingiz mumkin. Xitoyda uyingizdan chiqmasdan xarid qilishingiz mumkin bo'lgan ko'plab onlayn platformalar mavjud. <br /> Iste'molchilar orasida eng mashhurlari Taobao, 1688, Tmall. Bu yerda deyarli hamma narsa sotiladi:</p>
                                    <ul>
                                        <li>bolalarning tug'ilgandan to o'smirlik davrigacha bo'lgan uy-ro'zg'or buyumlari;</li>
                                        <li>barcha o'lcham va uslubdagi zamonaviy kiyim va poyabzal;</li>
                                        <li>kanselyariya va o‘quv qurolla</li>
                                        <li>brend va kam ma'lum bo'lgan elektr tovarlari (telefonlar, soatlar, kichik maishiy texnika va boshqalar);</li>
                                        <li>Xitoy tibbiyoti va kosmetikasining shifobaxsh maxsulotlari;</li>
                                        <li>maishiy kimyo, to'qimachilik va maishiy mahsulotlar;</li>
                                        <li>zargarlik buyumlari, tabiiy toshlar va metallardan yasalgan zargarlik buyumlari;</li>
                                        <li>avtomobil mahsulotlari va avtomobil kosmetikasi;</li>
                                        <li>ovqat, choy, qahva.</li>
                                    </ul>
                                        <p>Siz Xitoy imperiyasining bepoyon kengliklarini cheksiz sanab o'tishingiz mumkin va ularning deyarli barchasi bizning <br /> mamlakatimizdagiga nisbatan "bir tiyin" turadi. Shuning uchun, agar siz maqbul sifatli narsalarni sotib olishni istasangiz va ayni <br /> paytda pulni tejashni istasangiz, Xitoydan xarid qilishdan ko'ra yaxshiroq variantni topa olmaysiz.</p>
                                        <p> Va bu yerda mantiqiy savol tug'iladi: agar bu yerda sotib olish juda foydali bo'lsa, nega hamma Xitoyda to'g'ridan-to'g'ri sotib <br /> olmaydi, lekin olib sotuvchilarning cho'ntagini to'ldirishda davom etadi.Javob juda oddiy va oddiy - aldanib qolish qo'rquvi. Bu, <br /> ayniqsa, onlayn xarid qilishdan uzoqda bo'lgan va mahalliy bozorlarda an'anaviy ravishda xarid qilishni davom ettiradiganlar uchun <br /> to'g'ri keladi.</p>
                                        <p>Lekin, aslida, Xitoy imperiyasi aholisidan buyurtma berish mamlakatimizdagi oddiy onlayn-do'konga buyurtma berishdan ko'ra qiyin <br /> emas. Asosiysi, yuk tashishni mas'uliyatli, ishonchli transport va logistika tashkilotiga topshirish!</p>
                                        <p>Kim Xitoydan O‘zbekistonga yukni xavfsiz yetkazib beradi?</p>
                                        <p>Chet elda xarid qilishning ijobiy tomonlari bilan bir qatorda, vijdonsiz sotuvchining qo‘liga tushib qolish yoki tavsifga mos <br /> kelmaydigan mahsulotni olish kabi salbiy jihatlar ham mavjud. Aytaylik, siz orzu qilgan ko'ylakni topdingiz, pulini to'ladingiz va <br /> posilkani olishni hayajon bilan kutmoqdasiz. Uni ochganingizda, kutilgan kiyim o'rniga kiyimga noaniq o'xshash tushunarsiz mato <br /> bo'lagini topasiz.</p>
                                        <p>Afsuski, Xitoyda bunday holatlar kam uchraydi. Import jarayonida xaridingizning saqlanishini kafolatlashdan tashqari, tekshiruvni <br /> tashkil etadigan va sizga fotohisobot yuboradigan ishonchli tashuvchiga murojaat qilsangiz, bunday daqiqalardan qochishingiz <br /> mumkin. O‘zbekistonda bunday xizmatlar Meest China kompaniyasi tomonidan taqdim etiladi. Bizning abonentlarimiz har doim <br /> hamkorlikning eng tejamkor shartlariga ishonishlari mumkin, jumladan:</p>
                                        
                                        <ul>
                                            <li>aniq muddatlar;</li>
                                            <li>yukingizni jo‘natishni kutayotganda yo‘qolib qolmaydigan va buzilmaydigan zamonaviy ombor;</li>
                                            <li>maqbul narx siyosati;</li>
                                            <li>har bir mijozga shaxsiy yondashuv;</li>
                                            <li>sifat nazorati va qadoqlashda yordam berish;</li>
                                            <li>hujjatlar bilan yordam.</li>
                                        </ul>
                                        <p>Ko'p yillik tajriba, malakali xodimlar jamoasi, o'z logistika markazimiz va aniq ishlab chiqilgan ish rejamiz tufayli biz Xitoydan imkon <br /> qadar tez va mutlaqo xavfsiz yetkazib beramiz. Biz mijoz oldida to'liq huquqiy va  moliyaviy javobgarlikni o'z zimmamizga olamiz va <br /> vaqtinchalik standartlarga rioya qilishni ishonchli kafolatlaymiz. Ichki bozorda bir xil sharoitlarda o'xshash faoliyatni amalga <br /> oshiradigan o'xshash transport va logistika tashkilotlari yo'q.</p>
                                        <h6>Xitoydan O‘zbekistonga yetkazib berish: xizmat ko‘rsatish algoritmi</h6>
                                        <p>Albatta, Xitoydan buyurtma berish ma'lum xavf va vaqt xarajatlari bilan bog'liq, ammo Meest China kompaniyasining tajribasi va <br /> keng ko'lamli xizmatlar bizga hatto birinchi marta buyurtma berganlar uchun ham eng qulay sharoitlarni tanlash imkonini beradi. <br /> Abonent bo'lish juda oddiy, siz tizimda (veb-saytda yoki mobil ilovada) asosiy ro'yxatdan o'tishingiz kifoya. Bu yerda haqiqiy <br /> ma'lumotlarni taqdim etish juda muhim, aks holda siz jo'natmasiz qolishingiz mumkin. Siz qoldirgan maʼlumotlarga asoslanib, <br /> Xitoydan Oʻzbekistonga yetkazib berish amalga oshiriladi.</p>
                                        <p>Siz Xitoyda eng qulay sotib olish variantini tanlashingiz mumkin:</p>
                                          <ul>
                                              <li>Mustaqil ravishda har qanday savdo maydonchasida (bu tilni bilish yoki tarjimondan foydalanishni talab qiladi).</li>
                                              <li>Meest China Shop orqali. Ushbu platformada biz barcha tasdiqlangan yetkazib beruvchilarni to'pladik va ularning mahsulotlari tavsiflarini tarjima qildik.</li>
                                          </ul>
                                          <p>Har bir variant o'zining afzalliklari va kamchiliklariga ega. Birinchisida, buyurtma berganingizdan so'ng, siz shaxsiy hisobingizga hisob-faktura raqamini mustaqil ravishda qo'shishingiz va oluvchini kompaniyaning vakolatli vakili sifatida ko'rsatishingiz kerak, ikkinchisida biz siz uchun hamma narsani qilamiz. Bundan tashqari, ikkala holatda ham shaxsiy hisobingizda bir qator qo'shimcha xizmatlar mavjud, masalan:</p>
                                          <ul>
                                            <li>mustahkamlash;</li>
                                            <li>nuqsonlar va tavsifga muvofiqligini tekshirish;</li>
                                            <li>foto yoki video hisobot;</li>
                                            <li>Qadoqlash;</li>
                                            <li>tayyor yuk.</li>
                                          </ul> 
                                          <p>Oddiy qilib aytganda, konsolidatsiya bir nechta jo'natuvchilardan mahsulotlarni bitta posilkaga yig'ish huquqidir. Konsolidatsiyadan o'tayotgan barcha narsalar yuklash va tushirish operatsiyalari paytida yuzaga keladigan fors-major vaziyatlardan himoya qilish uchun plastik konvertlarga yoki karton qutilarga joylashtiriladi. Bizning omborimizda quyidagi qadoqlash materiallari mavjud:</p>
                                          <ul>
                                            <li>gofrokarton qutilar;</li>
                                            <li>PET sumkalar;</li>
                                            <li>pufakchali o‘ram.</li>
                                          </ul>
                                          <p>Har bir tur ma'lum bir elementlar guruhi uchun mo'ljallangan va deyarli har qanday sharoitda ham yaxlitlikni saqlashga qodir. Qolgan xaridlar Guanchjoudagi omborga yetib borgunga qadar sizga yecheykali saqlash xonasi ham taqdim etiladi. Keyin bizning xodimlarimiz buyurtmangizni to'ldiradi va jo'natishga tayyorlaydi. Ushbu xizmat transportni sezilarli darajada tejash imkonini beradi, chunki bu bilan siz qutidagi har bir buyum uchun emas, balki bitta posilkani tashish uchun to'laysiz.</p>
                                          <p>Agar siz uchun ishlab chiqaruvchidan asl o'ramni qoldirish juda muhim bo'lsa, siz "O'rashni saqlash" xizmatiga mutlaqo bepul buyurtma berishingiz mumkin. Tashkilotimiz me'yorlariga ko'ra, telefonlar va elektrotexnika buyumlari, smartfonlar uchun aksessuarlar, zargarlik buyumlari va zargarlik buyumlarida asl o'ram saqlanadi (to'liq ro'yxat bilan bizning veb-saytimizda tanishishingiz mumkin). Bu tashish paytida barcha narsalarni buzilmagan holda saqlashga imkon beradi.</p>
                                          <p>Xizmat foydalanuvchilariga muvofiqlikni (nuqsonlarni) tekshirish va hisobotni (tekshiruvni tasdiqlash) buyumning sifatini u O‘zbekistonga kelishidan oldin ham aniqlash imkonini beradi. Agar u mos kelmasa, uni sotuvchiga va pulni hisobingizga qaytariladi. Bunday yondashuv nafaqat pul va stressni tejashga yordam beradi, balki xariddan umidsizlikka tushmaslikka yordam beradi. Siz rang va teksturadan tortib balandlik, aylana, tugmalar soni oʻlchovlarigacha boʻlgan har qanday narsani nazorat qilishni soʻrashingiz mumkin, shuningdek, elektronikaning funksionalligi va savdogar eʼlonida koʻrsatilgan dasturiy taʼminotga muvofiqligini tekshirishingiz mumkin. Bizning xodimlarimiz nafaqat hamma narsani sinchkovlik bilan tekshiradilar, balki hamma narsani fotosuratlar yoki videolarga yozib oladilar va keyin sizga yuboradilar (hisobotni veb-sayt yoki mobil ilovada shaxsiy kabinetingizda ko'rishingiz mumkin).</p>
                                          <p>"Tayyor yuk" xizmati odatda ma'lum bir yetkazib beruvchidan mahsulotga bir necha marta buyurtma bergan va uning ishonchliligiga ishonchi komil bo'lgan savdogarlar tomonidan qo'llaniladi. Biz mijozlarimiz har doim maxfiylikka ishonch hosil qilishlari uchun hamma narsani qilamiz (barcha jo'natilgan mahsulotlar karton qutilarga, polietilenga xavfsiz tarzda qadoqlangan va qo'shimcha ravishda lenta bilan o'ralgan).</p>
                                          <h6>Narx siyosati</h6>
                                          <p>Biz Xitoyning yetakchi kuryerlik xizmatlaridan biri – ZTO kompaniyasi bilan foydali hamkorlikka kirdik. Bu bizning mijozlarimizga misli ko'rilmagan xizmatni olish huquqini beradi - posilkalaringizni bepul tashish (bu taklif XXRda Guanchjoudagi omborga yetkazib berishga buyurtma bergan iste'molchilarimiz uchun amal qiladi). O‘zbekistonga to‘g‘ridan-to‘g‘ri uchadigan zamonaviy avialaynerda haftalik reyslar tufayli siz aniq vaqt oralig‘ida tezkor qabul qilishga ishonishingiz mumkin. Kompaniya o'z abonentlariga transportda tejash imkonini beruvchi bir nechta xizmat paketlarini taklif etadi:</p>
                                          <ul>
                                              <li>Standart – o‘zi uchun buyurtma berganlar uchun mos, narxi 12,5$/kg dan (1 oyga amal qiladi, 25 kg gacha yuk tashishni o‘z ichiga oladi);</li>
                                              <li>Shopper – yangi ish boshlagan tadbirkorlar va jo‘natmalari standart paket stavkasidan oshib ketgan mijozlar uchun foydalidir ($12,3/kg, hisob-kitob davri 1 oy, import limiti 25 dan 75 kg gacha);</li>
                                              <li>Oltin – eng tejamkor takliflardan biri hisoblanadi. Narxi $12,2/kg, tarifning amal qilish muddati 2 oy, vazn normasi oyiga 75 dan 150 kg gacha;</li>
                                              <li>Platinum - yirik kompaniyalar va vakolatxonalar uchun mo'ljallangan, narxi $12/kg, 3 oylik xizmat ko'rsatish, oyiga 150 kg dan ortiq olish imkoniyati.</li>
                                          </ul>
                                          <p>Parvoz to'g'ridan-to'g'ri reyslar orqali amalga oshiriladi. Asosiy afzallik shundaki, bunday yuklar juda tez keladi (9 kundan boshlab). Yaroqlilik muddati cheklangan mahsulotlarga buyurtma berganlar yoki yaqin kelajakda talab qilinadigan narsalarni sotib olganlar uchun ushbu variant ajoyib yechim bo'ladi. Xitoydan yetkazib berishning standart narxiga konsolidatsiya, standart qadoqlash, Toshkent filialiga to'g'ridan-to'g'ri tashish kabi xizmatlar kiradi. Va barcha kerakli hujjatlarni tayyorlash har bir posilka uchun atigi 1,5 dollar turadi va majburiydir.</p>
                                          <h6>Xitoydan posilkalarni yetkazib berish Smartfoningizda</h6>
                                          <p>Kompaniya xitoylik xaridlarni sodda va har bir iste'molchi uchun qulay qilish uchun hamma narsani qilmoqda. Shu maqsadda smartfon egalariga to‘liq nazorat qilish imkonini beruvchi mobil ilova ishlab chiqildi:</p>
                                          <ul>
                                            <li>transportda tejash uchun turli do‘konlardan olingan tovarlarni bir qutiga birlashtiring;</li>
                                            <li>turli qabul qiluvchilar uchun yoki bojxona import chegarasidan oshib ketmaslik uchun yirik yuklarni bir nechtaga bo'lish;</li>
                                            <li>turli qabul qiluvchilar uchun yoki bojxona import chegarasidan oshib ketmaslik uchun yirik yuklarni bir nechtaga bo'lish;</li>
                                          </ul>
                                          <h6>Xitoydan Toshkentga tovar yetkazib berish pul ishlash usuli sifatida</h6>
                                          <p>Ko'plab tadbirkorlar mamlakatimizda sotib olish va muvaffaqiyatli amalga oshirishning afzalliklarini aniqladilar. Kompaniya turli toifadagi iste'molchilar bilan hamkorlik qiladi, bunday operatsiyalarda ishonchli hamkorga aylanadi. Shuning uchun, agar sizda biznes boshlash istagi bo'lsa, siz ishonchliroq tashuvchini topa olmaysiz. Posilka Toshkentdagi omborga yetib kelganidan so‘ng Telegram’da bildirishnoma olasiz. Oʻzbekiston boʻylab tashish oʻrtacha 1 kundan 5 kungacha davom etadi.</p>
                                          <p>Iqtisodiy prognozlar shuni ko'rsatadiki, Xitoy mahsulotlari kelgusi o'nlab yillar davomida jahon bozorida hukmronlik qiladi. Birinchidan, chunki Xitoy imperiyasining ishlab chiqarish quvvatlari arzon narx segmentida turli xil mahsulotlarni minimal xarajat bilan ishlab chiqarishi mumkin bo'lgan zamonaviy yuqori texnologiyali uskunalardir. Bu degani, yangi tadbirkorlar uchun imkoniyatlar faqat o'sib boradi va rivojlanadi.</p>
                                          <p>Kompaniyamiz barcha darajadagi xaridorlarga xizmat ko'rsatadi. Va siz katta tadbirkormisiz va katta partiyalarga buyurtma berasizmi yoki biznesmen sifatida loyihangizni endigina boshlayapsizmi, muhim emas. Meest China xizmati har kimga individual tashkilni topadi va har qanday holatda ham eng qulay sharoitlarni taklif qiladi. Hali ham o'zingiz sotib olish jur'at etmayapsizmi yoki nozik narsalarni o'rganishni xoxlamaysizmi? Keyin bizning tovarlarni sotib olish xizmatimiz siz uchun haqiqiy topilma bo'ladi! Siz uchun xavfsiz va maksimal foyda !</p>
                                          <p>O'zimizning logistika va bojxona koridorimizga ega bo'lishi aniq muddatlarni bashorat qilish imkonini beradi. Hujjatlar bilan shug'ullanishni va bojxona rasmiylashtiruvi jarayonini chuqur o'rganishni istamaydiganlar uchun bizning jamoamizga to'liq topshirishni taklif qiladi. Buyurtma berish va buyurtmaning borishini bizning veb-saytimizda kuzatib borish kifoya!</p>
                                          <h6>Xitoydan tovarlar yetkazib berish: tadbirkorlar uchun imtiyozlar</h6>
                                          <p>Meest China nafaqat tashuvchi, balki har qanday savdo biznesi egalari uchun ishonchli qo'llab-quvvatlash yelkasidir. Kompaniya xodimlari o'z ishiga yuqori mas'uliyat bilan munosabatda bo'lishlari tufayli mijozlarimiz kerakli hajm va muddatlarda o'z vaqtida yetkazib berishga ishonishlari mumkin. Minglab tadbirkorlar bizga ishonishadi, chunki:</p>
                                          <ul>
                                            <li>bizda katta tajriba va resurslar mavjud;</li>
                                            <li>biz faqat qayta ishlashimiz mumkin bo'lgan narsalarni jo'natishga qabul qilamiz;</li>
                                            <li>biz mutlaqo qonuniy va toza, yashirin to'lovlar va noaniq sxemalarsiz ishlaymiz;</li>
                                            <li>biz moliyaviy kafolatlarga egamiz va javobgarlikni o'z zimmamizga olamiz.</li>
                                            <li>biz 100% samaradorlikni ta'minlaymiz (tekshirish, deklaratsiya, ro'yxatdan o'tkazish, mijoz bilan o'zaro hamkorlik).</li>
                                          </ul>
                                          <p>Biz hamma uchun, chakana savdo nuqtalari egalari, onlayn sotuvchilar va guruhli xaridlar tashkilotchilariga ishonchli hamkorlar aylandik. Bizning xususiyatlarimizning eng muhim omili - kompleks yondashuv, bizning xodimlarimiz shu qadar malakaliki, ular har qanday vazifani osonlikcha bajara oladilar: shartnoma tuzish va XXRda xarid qilishdan tortib, mamlakatga olib kirish uchun zarur bo'lgan barcha hujjatlarni rasmiylashtirish va bojxona rasmiylashtiruvigacha. , keyinchalik Toshkent shahridagi ofisga yoki ko'rsatilgan manzilga yetkazib berish bilan.</p>
                                          <h6>Mijozlar Meest China bilan hamkorlik qilish orqali oladigan imtiyozlar</h6>
                                          <p>Yuk tashish sohasidagi ko'p yillik tajribamiz tufayli biz bilamizki, har bir kishi tashish qanday amalga oshirilishi haqida o'z xohishiga ega. Ba'zi mijozlar ko'proq pul to'lashga tayyor, lekin hamma narsani imkon qadar tezroq olishni xohlashadi, boshqalari uchun esa maqbul narx muhimroqdir, lekin ular kutishga tayyor. Sizning istaklaringizni inobatga olgan holda, biz har kim o'ziga mos keladigan hamkorlik shaklini topishi uchun turli xil variantlarni taklif qilamiz. Biz o‘z obro‘-e’tiborimizni qadrlaymiz, shuning uchun mijozlarning deyarli har qanday talabini qondira oladigan xizmatni yaratdik:</p>
                                          <ul>
                                            <li>Guanchjoudagi o'z omborimiz mijozning iltimosiga binoan har qanday operatsiyalarni amalga oshirishga imkon beradi;</li>
                                            <li>Xitoy kuryerlik xizmati bilan hamkorlik pulni tejash imkonini beradi;</li>
                                            <li>yuklarni sinchkovlik bilan tekshirish nuqsonlar yo'qligini kafolatlaydi;</li>
                                            <li>biz taqdim etayotgan sug'urta va moliyaviy javobgarlik jo'natishingiz o'z vaqtida va yaxshi holatda yetib kelishiga ishonch hosil qilish imkonini beradi.</li>
                                          </ul>
                                          <p>Biz mijozlarimiz va zamonaviy bozor sharoitlari bilan birgalikda rivojlanamiz va takomillashamiz. Ishonchimiz komilki, biz bilan sizga aynan siz buyurtma bergan mahsulotni olishingiz kafolatlanadi.</p>
                              </div>
                              <div className='ccx'>
                                      <img src="https://uz.meest.cn/media/images/Frame_3.original.png" alt="" />
                              </div>
                    </div>
          </div>


          <div className='end'>
                <div className='end1'>
                          <div className='pok'>
                              <h6>Yetkazib berish</h6>
                              <a href="">Taobao'dan mahsulot sotib olish</a><br />
                              <a href="">Yetkazib berishni <br /> rasmiylashtirish</a><br />
                              <a href="">Bojxona tekshiruvidan o'tkazish</a><br />
                              <a href="">🔴Reklamatsiya siyosati🔴</a><br />
                          </div>

                          <div className='pok1'>
                                <h6>Do'kon</h6>
                                <a href="">Buyurtmani rasmiylashtirish</a><br />
                                <a href="">Yetkazib berish uchun to'lov qilish</a><br />
                                <a href="">Buyurtmani bekor qilish</a><br />
                                <a href="">Ko'rsatma 1688</a><br />
                                <a href="">Ko'rsatma Taobao</a><br />
                                <a href="">Ko'rsatma POIZON</a><br />
                                <a href="">Ko'rsatma Pinduoduo</a>
                          </div>

                          <div className='pok2'>
                              <h6>Xizmatlar</h6>
                              <a href="">Tarif va xizmatlar</a><br />
                              <a href="">Xitoydan havo transporti orqali yetkazish</a><br />
                              <a href="">Xitoydan avtomatik yetkazib berish</a><br />
                              <a href="">Tijorat yuklarini yetkazib berish Xitoy - O'zbekiston</a>
                          </div>
                          
                          <div className='pok3'>
                                <h6>Kompaniya haqida</h6>
                                <a href="">Kompaniya haqida</a><br />
                                <a href="">Blog</a><br />
                                <a href="">Aloqa</a><br />
                                <a href="">Fikrlar</a><br />
                                <a href="">Ommaviy ofertasi</a>
                          </div>
                          
                          <div className='pok4'>
                              <h6>Qo'llab-quvvatlash xizmati</h6>
                              <p>+998 71 203 03 02</p>
                              <p>Du-Ju 9:00 - 18:00</p>
                              <p>Sha: 9:00 до 15:00</p>
                              <p>Ya - dam olish kunlari</p>
                              <a href="">support@info.meest.cn</a>
                          </div>

                            <div className='pok6'>
                                  <div className='dew'>
                                          <p>Yetkazib berish</p>
                                          <i class="fa-solid fa-angle-right"></i>
                                  </div>
                                  <div className='dew1'>
                                          <p>Kompaniya haqida</p>
                                          <i class="fa-solid fa-angle-right"></i>
                                  </div>
                                  <div className='dew2'>
                                        <p>Xizmatlar</p>
                                        <i class="fa-solid fa-angle-right"></i>
                                  </div>
                            </div>


                          
                          <div className='pok5'>
                                <h6>Mobil ilova</h6>
                                <p>Yetkazib  berish</p>
                                <a href="">
                                <i class="fa-brands fa-apple"></i>
                                <i class="fa-brands fa-google-play"></i><br />
                                <i class="fa-brands fa-telegram"></i>
                                <i class="fa-brands fa-youtube"></i><br />
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                </a>
                          </div>

                </div>



                <div className='end2'>
                      <div className='vgc'>
                          <p>District Court in Rzeszow, XII Department of Economics of the <br /> National Court Register KRS (National Court Register): 0000501663</p>
                          <p>©  2024  Meest Group. All rights reserved.</p>
                      </div>
                      <div className='asb'>
                          <img src="https://uz.meest.cn/static/svg/acquiring/mastercard-icon.svg" alt="" />
                          <img src="https://uz.meest.cn/static/svg/acquiring/visa-icon.svg" alt="" />
                      </div>
                      <div>

                      </div>
                </div>
          </div>
          <div className='butt'>
              <button><i class="fa-solid fa-phone"></i></button><br /><br />
              <button><i class="fa-solid fa-message"></i></button>
          </div>

          <div className='tarif'>
              <div className='tarif1'>
                <button>
                <i class="fa-solid fa-tag"></i>
                <p>Tarif</p>
                </button>
                <button>
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>Kuzatish</p>
                </button>
                  <button>
                  <i class="fa-solid fa-cart-flatbed-suitcase"></i>
                  <p>Yuklar</p>
                  </button>
                <button>
                <i class="fa-solid fa-tag"></i>
                <p>Kabinet</p>
                </button>
              <button>
              <i class="fa-solid fa-cart-shopping"></i>
              <p>Do'kon</p>
              </button>
              </div>
          </div>


      </div>
    )
  }