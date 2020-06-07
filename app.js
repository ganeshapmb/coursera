(
  function () {
    'use strict'


    angular.module('myapp',[])
    .controller('mycontroller',mycontroller)
    .controller('mycontroller2',mycontroller2)
    .service('myservice',myservice);

    mycontroller.$inject=['myservice'];
    function mycontroller(myservice) {
      var list1= this;

      list1.items=myservice.getitems();


      list1.itembought=function ($index,name,quantity) {
        myservice.itembought($index,name,quantity);
      }

  }

  mycontroller2.$inject=['myservice'];
  function mycontroller2(myservice) {
    var list2=this;
    list2.boughtitems=myservice.getboughtitems();

    }

  function myservice()
  {
    var service=this;


    var items=[{name: "cookies", quantity: 10},
    {name: "crunchies", quantity: 15},
    {name: "chips", quantity: 5},
    {name: "biscuits", quantity: 5},
    {name: "chocolate cookies", quantity: 10}];

    service.getitems=function () {
    return items;
  }

    var boughtitems=[];
    service.getboughtitems=function () {
    return boughtitems;
    }



    service.itembought=function ($index,name,quantity) {
    var item={name: name, quantity: quantity};

    boughtitems.push(item);
    items.splice($index,1);

  }

  service.getboughtitems=function () {
  return boughtitems;
  }
  service.getitems=function () {
  return items;
  }

}
  }
)();