Maneuver
----

Maneuver is a css library of interactive elements built on top of [stylus](https://github.com/LearnBoost/stylus) and [nib](http://visionmedia.github.io/nib/).

### Installation

```
npm install maneuver
```

### Documentation

<a href="http://rhythnic.github.io/maneuver-docs/">Docs are here.</a>

### Version 0.0.13
Tabs added.
Changed toggle parameters.

### Version 0.0.11
FlipCard added.

In the offcanvas mixin, some terminology changed.  Push used to be the minimum screen width at which the content width shrinks when the menu is open.  Now, 'share', refers to that width.  Push is now a boolean parameter for choosing to push the content instead of overlapping it.  Push only applies when show or share aren't in effect.

### Contributing
Please contribute by forking the repository, adding your mixin, and doing a pull request.  If the main contributers think it should be part of the package then also do the mocha tests and we'll merge your pull request.


### Miscellaneous

- Details on the license [can be found here](license.md)
- Thanks to <a href="https://github.com/jenius">jenius</a> for allowing me to use <a href="https://github.com/jenius/axis">axis</a> as a model for making this repository.