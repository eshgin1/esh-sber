<script lang="ts">
  import Counter from './lib/Counter.svelte'
  let aed: string = 'aed'
  let eur: string = 'eur'
  let inputValue1: number
  let inputValue2: number
  let inputRes : number
  let select : string


  let API = 'https://v6.exchangerate-api.com/v6/c48e08ec17a008faa4d43518/latest/USD'
  function updataValue1 (){
    const response = fetch(API)
      .then(response => response.json())
      .then(json => {
        if(select === aed){
          inputValue1 = inputValue2 * json.conversion_rates.AED
        }
        if(select === eur){
          inputValue1 = inputValue2 * json.conversion_rates.EUR
        }
      })
    
  }
  function updataValue2 (){
    const response = fetch(API)
      .then(response => response.json())
      .then(json => {
        if(select === aed){
          inputValue2 = inputValue1 * json.conversion_rates.AED
        }
        if(select === eur){
          inputValue2 = inputValue1 * json.conversion_rates.EUR
        }

      })
  }
  
</script>

<main>
  <select bind:value={select}>
    <option value="aed">{aed}</option>
    <option value="eur">{eur}</option>
  </select>
  <div>
    <input type="number" bind:value={inputValue1} on:input={updataValue2}>
    <input type="number" bind:value={inputValue2} on:input={updataValue1}>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
