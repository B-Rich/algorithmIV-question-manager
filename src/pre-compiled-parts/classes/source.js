  /**
   * -----------------------------------------------------
   * Public Class (Source)
   * -----------------------------------------------------
   * @desc An object containing the details of a source.
   * @param {string} name - The source's name.
   * @constructor
   */
  var Source = function(name) {

    ////////////////////////////////////////////////////////////////////////////
    // Define The Protected Properties
    ////////////////////////////////////////////////////////////////////////////

    /**
     * ----------------------------------------------- 
     * Protected Property (Source.url)
     * -----------------------------------------------
     * @desc The source's url name.
     * @type {string}
     * @private
     */
    var url;

    /**
     * ----------------------------------------------- 
     * Protected Property (Source.ids)
     * -----------------------------------------------
     * @desc The ids of the questions containing this source.
     * @type {nums}
     * @private
     */
    var ids;

    ////////////////////////////////////////////////////////////////////////////
    // Setup The Protected Properties
    ////////////////////////////////////////////////////////////////////////////

    if (!name || typeof name !== 'string') {
      name = '';
      url  = '';
    }
    else {
      url = name.toLowerCase();
      url = url.replace(/[^0-9a-z\-\s]/g, '');
      url = url.replace(/\s/g, '-');
    }
    ids = [];

    ////////////////////////////////////////////////////////////////////////////
    // Define & Setup The Public Methods
    ////////////////////////////////////////////////////////////////////////////

    /**
     * ----------------------------------------------- 
     * Public Method (Source.get)
     * -----------------------------------------------
     * @desc Gets a protected property's value from the source.
     * @param {string} prop - The name of the property to get.
     * @return {(string|numbers)}
     */
    this.get = function(prop) {

      /** @type {Object<string, (string|function)>} */
      var props = {
        name: name,
        url : url,
        ids : function() {
          return Object.freeze( ids.slice(0) );
        }
      };

      prop = props[ prop ];

      return (typeof prop === 'function') ? prop() : prop;
    };

    /**
     * ----------------------------------------------- 
     * Public Method (Source.addId)
     * -----------------------------------------------
     * @desc Adds a question id to this source.
     * @param {number} id - The index to add.
     */
    this.addId = function(id) {

      if (typeof id === 'number' && id > 0) {
        ids.push(id);
      }
    };

    // Freeze all of the methods
    Object.freeze(this.get);
    Object.freeze(this.addId);

    ////////////////////////////////////////////////////////////////////////////
    // End Of The Class Setup
    ////////////////////////////////////////////////////////////////////////////

    // Freeze this class instance
    Object.freeze(this);
  };

////////////////////////////////////////////////////////////////////////////////
// The Prototype Methods
////////////////////////////////////////////////////////////////////////////////

  Source.prototype.constructor = Source;
