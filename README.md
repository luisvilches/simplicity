# Motor de templates para nodeJS Simplicity

inspirado en higanbana


motor de plantilla
```html
<div>{{user.name.first}} {{user.name.last}}</div>
```

```html
<div>{{num1}} + {{num2}} = {{num1 + num2}}</div>
```



## if - else if - else

```html
<div>
	<!-- if -->
	<div s-if="a>0">algo</div>

	<!-- if-else -->
	<div s-if="a>0">otra cosa</div>
	<!-- else if -->
	<div s-else="a==0">otra cosa </div>  
	<!-- else -->
	<div s-else> si no esta cosa </div>        

	<!-- mostrar o no elementos -->
	<div s-show="a==40">40</div>
	<div s-hide="a==40">30</div>
<div>
```


## for

```html
<!-- for -->
<table>
	<tr s-for="user in users">
		<td>{{user.id}}</td>
		<td>{{user.name}}</td>
	</tr>
</table>

<!-- for index -->
<table>
	<tr s-for="(user, index) in users">
		<td>{{index+1}}</td>
		<td>{{user.id}}</td>
		<td>{{user.name}}</td>
	</tr>
</table>

<!-- for mas funcion filter --

<table>
	<tr s-for="(item, key) in users.filter(u=>u.gender=='male')">
		<td>{{index+1}}</td>
		<td>{{user.id}}</td>
		<td>{{user.name}}</td>
	</tr>
</table>


<div s-for="num1 in 4">  <!-- 0, 1, 2, 3 -->
	<div s-for="num2 in -4" style="display:inline-block; width:100px"> 	<!-- 0, -1, -2, -3 -->
		<span>{{ num1 }}</span>
		<span>{{ (num2>=0) ? '+' : '-' }}</span>
		<span>{{ Math.abs(num2) }}</span>
		<span>=</span>
		<span>{{ num1+num2 }}</span>
	</div>
</div>

```

## mkrange

mkrange(from:number, to?:number):Array<number>：
```js
mkrange(1, 3)               // 1, 2
mkrange(3)                  // 0, 1, 2
mkrange(3, 0)               // 3, 2, 1
```

ejemplo：
```html
<div hi-for="number in mkrange(10)">{{number}}</div>
```



## require

```html
<require path="./../lib/footer.html"/>
```
