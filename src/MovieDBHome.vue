<template>
  <div id="app">
    <div class="p-3 mb-2 bg-secondary text-white">
      <nav class="navbar navbar-light bg-dark">
          <h3 class="media-heading">Movie Database: Now Playing</h3>
      </nav>
    </div>
    <div id="cart">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Movie</th>
            <th scope="col">Adult Tickets</th>
            <th scope="col">Child Tickets</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Button</th>
          </tr>
          </thead>
          <tbody id="tBody">
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>Adult Subtotal</td>
              <td id="AdultTotal">$0.00</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Child Subtotal</td>
              <td id="ChildTotal">$0.00</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Total</td>
              <td id="Total">$0.00</td>
              <td></td>
            </tr>
          </tfoot>
      </table>

    </div>
    <NowPlaying @AddAdult="AddAdult" @AddChild="AddChild" ref="nowPlaying"/>
  </div>
</template>

<script>
var tickets = 0;
import NowPlaying from './components/NowPlaying.vue';
export default {
  name: 'App',
  components: {
    NowPlaying
  },
  methods: {
    AddAdult(title)
    {
      console.log("Added Adult " + title);
      
      console.log("making entry");
      var row = document.createElement('tr');
      var dataTitle = document.createElement('td');
      dataTitle.innerHTML = title;
      row.appendChild(dataTitle);
      var dataNum = document.createElement('td');
      dataNum.innerHTML = 1;
      row.appendChild(dataNum);
      row.appendChild(document.createElement('td'));
      var dataTotal = document.createElement('td');
      dataTotal.innerHTML = '$12.99';
      row.appendChild(dataTotal);
      var button = document.createElement("input");
      button.type = 'button';
      button.onclick = 'RemoveMovie';
      button.value = "Remove Ticket";
      var dataButton = document.createElement('td');
      dataButton.appendChild(button);
      row.appendChild(dataButton);
      tickets += 1;
      row.value = tickets;
      document.getElementById("tBody").appendChild(row);
      this.CalculatePrice();
    },
    RemoveMovie()
    {
      console.log("Remove Movie")
    },
    AddChild(title)
    {
      
      console.log("Added Child " + title);
      
      console.log("making entry");
      
      tickets += 1;
      var row = document.createElement('tr');
      var dataTitle = document.createElement('td');
      dataTitle.innerHTML = title;
      row.appendChild(dataTitle);
      row.appendChild(document.createElement('td'));
      var dataNum = document.createElement('td');
      dataNum.innerHTML = 1;
      row.appendChild(dataNum);
      var dataTotal = document.createElement('td');
      dataTotal.innerHTML = '$8.99';
      row.appendChild(dataTotal);
      var button = document.createElement("input");
      button.type = 'button';
      button.onclick = 'RemoveMovie';
      button.value = "Remove Ticket";
      var dataButton = document.createElement('td');
      dataButton.appendChild(button);
      row.appendChild(dataButton);
      row.value = tickets;
      document.getElementById("tBody").appendChild(row);
      this.CalculatePrice();
    },
    CalculatePrice()
    {
      var table = document.getElementById('tBody');
      var adultTotal = 0;
      var childTotal = 0;
      console.log(table);
      console.log(table.rows);
      for (var i = 0; i < table.rows.length; i++)
      {
        adultTotal += table.rows[i].cells[1].innerHTML * 12.99;
        childTotal += table.rows[i].cells[2].innerHTML * 8.99;
      }
      document.getElementById('AdultTotal').innerHTML = adultTotal;
      document.getElementById('ChildTotal').innerHTML = childTotal;
      document.getElementById('Total').innerHTML = (adultTotal + childTotal);
    }
  },
  mounted()
  {

  }
}
</script>

<style>
#app {
  text-align: center;
}
table{
  empty-cells: show;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
