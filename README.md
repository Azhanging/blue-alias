# blue-alias
node module alias manage

### methods

#### setAlias(alias:{name:path}):void
set alias in this instance,path is resolve path

#### getAlias(name):string

get name path

************************
in node env,you try set BlueAlias instance in global
```javascript
const path = require('path');
const alias = new BlueAlias();
alias.setAlias({
  name: path.resolve(__dirname, `../someModule`)
});
//set alias in global
global['alias'] = alias;
``` 


#### attribute

.alias: all alias save in this attribute
