
import {ToyReact, Component} from './ToyReact';


class MyComponent extends Component{
    render() {
        return <div><span>hello</span><span>world</span></div>
    }
    
}
const a = <MyComponent name='a'>
<div>hhh</div>
</MyComponent>
// const a = <div>
//     <span>hello</span>
//     <span>world</span>
//     <span></span>
// </div>

ToyReact.render(a, document.body)