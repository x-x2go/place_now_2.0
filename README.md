# Place now 2.0

> 기존의 Place now를 REACT를 사용하여 보완하였습니다.
> Place now는 '시간 검색'에 중점을 둔 지도 웹페이지입니다.















### About
* * *
:girl: 다음날 아침 일찍 빵을 포장하고 싶은데 주변에 일찍 여는 곳이 있나?


:boy: 지금이 저녁 9시인데, 적어도 12시까지는 하는 카페를 찾고싶어.







Place now는 일상 속 작은 불편함으로 시작됐습니다. 주변에 가장 늦게까지 하는 마트를 찾아 일일히 영업시간을 확인 하는 것 대신에, break time이 없는 식당을 일일히 검색하는 대신에 세부 검색 기능을 추가하여 보다 편리하게 장소를 검색할 수 있습니다.






**❗ 해당 프로젝트는 Crome에 최적화 되어 있습니다**











### Introduce
* * *





![index](https://user-images.githubusercontent.com/59858942/110326371-ec505900-805b-11eb-889a-07f5e4182387.jpg)


**메인 화면**




![sidebar](https://user-images.githubusercontent.com/59858942/110326571-2b7eaa00-805c-11eb-87bc-b1ec9366179f.jpg)


**side bar**


search box에서 특정 장소의 이름을 검색할 수 있으며, 업종으로도 검색 가능합니다.
8개의 버튼을 누르면 순서대로 카페, 식당, 베이커리, 마트, 상점, 병원, 약국, 은행을 검색합니다. 카테고리 목록은 계속 추가됩니다.









![index_marker](https://user-images.githubusercontent.com/59858942/110326607-3afdf300-805c-11eb-833e-db628bbd3745.jpg)


원하는 위치로 지도를 이동한 후 카테고리 버튼을 클릭하면 지도에 marker가 표시됩니다. 더 세부적인 검색을 할 수 있도록 Detail Search bar가 활성화 됩니다.





![search_bar](https://user-images.githubusercontent.com/59858942/110326791-78fb1700-805c-11eb-980e-863242df7192.jpg)


**Detail Search bar**





![time_selection](https://user-images.githubusercontent.com/59858942/110326850-8ca67d80-805c-11eb-99a7-082dae594dc6.jpg)


**timeSelection**








* **현재 영업중** 버튼을 누르면 버튼이 활성화되며 현재 영업중인 가게들만 지도에 표시됩니다.
* **timeSelection** 을 통해 세부적인 시간을 검색할 수 있습니다.
* 다른 위치에서 검색을 이어가고 싶다면, 원하는 위치로 이동 후 **현재 위치에서 검색** 버튼을 누르세요.







![search_by_time](https://user-images.githubusercontent.com/59858942/110326898-99c36c80-805c-11eb-9cf6-08fefad8b2c9.jpg)


**InfoBox**




Marker를 클릭하면 해당 장소의 정보가 간략하게 나타납니다. 더 많은 정보를 보고싶다면, 가게 이름 옆의 > 버튼을 눌러주세요.






![detail_info](https://user-images.githubusercontent.com/59858942/110326933-a647c500-805c-11eb-8d91-c385e686718a.jpg)


**세부 정보**




InfoBox의 > 버튼을 누르면 side Bar에 가게의 상세 정보가 표시됩니다. 현재 영업중인지도 실시간으로 표시되며, 해당 요일의 영업시간에 하이라이트가 표시됩니다.











### Install
* * *

```
>npm install
```
실행에 필요한 npm 패키지를 설치합니다.

```
>npm start
```
webpack을 실행합니다.









### Tech
* * *




REACT, CSS, JavaScript(ES6)로 제작하였습니다.







### License
* * *

MIT



