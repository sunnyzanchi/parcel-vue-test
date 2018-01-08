# Vue Parcel Test
Just testing out how well Parcel plays with Vue. As of right now (1/7/18), it actually works pretty well. `parcel-plugin-vue` is still in a very experimental state, but it still puts in work - quite quickly actually: initial build usually takes 1.5-2 seconds on my cheap laptop with an i3, rebuilds range from 150ms to 1.5 seconds.

## Single File Components
It correctly compiles all-in-one single file components (like Home in this project) and split up SFCs (like HomeSection). It can do different language support from component sections, like scss for styles exactly like you would expect. It knows to rebuild when you edit .vue files, but not files that a .vue file references, like the index.scss for HomeSection.

## Run
```
yarn start
```