## message组件的实现

需求分析：
message组件的使用通常是点击然后创建一个message，停留几秒后消失。也就是说每次点击的时候，都会去创建一个message。
如果不使用Vue的话，理论上我们需要不断的通过document.createElement()来进行DOM操作，这与Vue的数据驱动相违背。


实现思路：
在Vue中我们不能直接去创建DOM，可以通过去继承一个Message的Vue实例。然后每次创建实际上都是去继承一次，这样就避免了DOM操作。
