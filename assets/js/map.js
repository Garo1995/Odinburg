
class YandexMapConstructor {
    constructor({
                    mapContainerId,
                    defaultMarker,
                    defaultCenter = [55.662836, 37.536472],
                    zoom = 15,
                    isMultiSelect = false
                }) {
        this.mapContainerId = mapContainerId;
        this.defaultCenter = defaultCenter;
        this.zoom = zoom;
        this.myMap = null;
        this.selectedCategory = [];
        this.mainPlacemark = null;
        this.pointCollection = null;
        this.initialized = false;
        this.defaultMarker = defaultMarker;
        this.isMultiSelect = isMultiSelect

        this.init();
    }

    init() {
        if (!this.initialized && window.ymaps) {
            this.initialized = true;
            ymaps.ready(() => this.initMap());
        }
    }

    initMap() {
        this.myMap = new ymaps.Map(this.mapContainerId, {
            center: this.defaultCenter, zoom: this.zoom, controls: []
        }, {
            suppressMapOpenBlock: true, // запрет на переход в Яндекс.Карты
            yandexMapDisablePoiInteractivity: true // отключить клики по POI
        });
        if (this.defaultMarker.length) {
            this.defaultMarker.forEach(marker => {
                const iconContent = ymaps.templateLayoutFactory.createClass(`
        <div class="bs-point-custom main ${marker.className}" data-id="${marker.defaultCenter[0]}">
       <img class="cover" src="${marker.icon}" alt="icons">
          <p class="title">${marker.title}</p>
        </div>`)

                const defaultMarkers = new ymaps.Placemark(marker.defaultCenter, {}, {
                    iconLayout: "default#imageWithContent",
                    iconImageHref: '',
                    iconImageSize: [48, 48],
                    zIndex: 2,
                    iconContentLayout: iconContent
                });


                this.myMap.geoObjects.add(defaultMarkers);
            })
            this.#generateDefaultMarker()
        }



    }

    #generateDefaultMarker() {
        const iconContent = ymaps.templateLayoutFactory.createClass(`
        <div class="bs-point-custom main ${defaultMarker[0].className}" data-id="${defaultMarker[0].defaultCenter[0]}">
       <img class="cover" src="${defaultMarker[0].icon}" alt="icons">
          <p class="title">${defaultMarker[0].title}</p>
        </div>`)

        this.mainPlacemark = new ymaps.Placemark(defaultMarker[0].defaultCenter, {}, {
            iconLayout: "default#imageWithContent",
            iconImageHref: '',
            iconImageSize: [48, 48],
            zIndex: 2,
            iconContentLayout: iconContent
        })
    }

    #generateMarkersList() {
        this.pointCollection = new ymaps.GeoObjectCollection();
        this.selectedCategory.forEach((category) => {
            category.points.forEach(point => {

                const  iconData = category.icon?category.icon: point.icon?point.icon:''

                const iconContent = ymaps.templateLayoutFactory.createClass(`
        <div class="bs-point-custom" data-id="${point.lat}">
          <img class="${iconData??'active-icon'}" src="${iconData}" alt="icons">
          <p class="title">${point.title}</p>
        </div>
      `);

                const placeMark = new ymaps.Placemark([point.lat, point.lot], {
                    iden: point.lat
                }, {
                    iconLayout: "default#imageWithContent",
                    iconImageHref: '',
                    iconImageSize: [48, 48],
                    iconImageOffset: [-48, -48],
                    iconContentOffset: [0, 0],
                    zIndex: 2,
                    iconContentLayout: iconContent
                });

                placeMark.events.add('mouseenter', (e) => {
                    const id = e.get('target').properties.get('iden');
                    const el = document.querySelector(`.bs-point-custom[data-id='${id}']`);
                    if (el) el.classList.add('hover');
                });

                placeMark.events.add('mouseleave', (e) => {
                    const id = e.get('target').properties.get('iden');
                    const el = document.querySelector(`.bs-point-custom[data-id='${id}']`);
                    if (el) el.classList.remove('hover');
                });

                this.pointCollection.add(placeMark);
            })
        });
        this.myMap.geoObjects.add(this.pointCollection);
        this.myMap.geoObjects.add(this.mainPlacemark);


    }

    changeCategory(category) {
        if(category){
            if (!this.myMap || !window.ymaps) return;

            const isSame = this.selectedCategory.some(x => x.title === category.title);
            this.myMap.geoObjects.removeAll();

            if (isSame) {
                if (this.isMultiSelect) {
                    this.selectedCategory = this.selectedCategory.filter(x => x.title !== category.title);
                } else {
                    this.selectedCategory = []
                }
            } else {
                if (this.isMultiSelect) {
                    this.selectedCategory.push(category)
                } else {
                    this.selectedCategory = [category]
                }
            }

            this.#generateMarkersList()
            return this.selectedCategory
        }else{
            this.selectedCategory = []
        }
        return []
    }

    zoomIn() {
        if (this.myMap) {
            this.myMap.setZoom(this.myMap.getZoom() + 1, {duration: 300});
        }
    }

    zoomOut() {
        if (this.myMap) {
            this.myMap.setZoom(this.myMap.getZoom() - 1, {duration: 300});
        }
    }

    resetToDefaultCenter() {
        if (this.myMap) {
            this.myMap.setCenter(this.defaultCenter, this.zoom, {
                duration: 300
            });
        }
    }




}

