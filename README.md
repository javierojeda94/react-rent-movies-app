# Rspec output
    MoviesController
      routing
        <span style="color: green">should route GET /movies to/from {:action=>"index", :controller=>"movies"}</span>
        should route GET /movies/1 to/from {:action=>"show", :id=>"1", :controller=>"movies"}
        should route GET /movies/new to/from {:action=>"new", :controller=>"movies"}
        should route POST /movies to/from {:action=>"create", :controller=>"movies"}
        should route GET /movies/1/edit to/from {:action=>"edit", :id=>"1", :controller=>"movies"}
        should route PUT /movies/1 to/from {:action=>"update", :id=>"1", :controller=>"movies"}
        should route POST /rent_a_movie to/from {:action=>"make_a_rent", :controller=>"movies"}
      actions
        with a logged in user
          GET #index
            should respond with 200
          GET #show
            should respond with 200
          GET #new
            should respond with 200
          POST #create
            should respond with 302
            should redirect to "/movies"
            should should set any key in flash
            saves a new movie
          GET #edit
            should respond with 200
          PUT #update
            should should set any key in flash
            should respond with 302
            should redirect to "/movies/1"
            should eql "Blue Pickpocket"
          POST #make_a_rent
            should respond with 200
            should should set any key in flash
        without a logged in user
          GET #index
            should respond with 302
            should redirect to "/"
          GET #show
            should respond with 302
            should redirect to "/"
          GET #new
            should respond with 302
            should redirect to "/"
          POST #create
            should respond with 302
            should redirect to "/"
            should should set any key in flash
            not saves a new movie
          GET #edit
            should respond with 302
            should redirect to "/"
          PUT #update
            should respond with 302
            should redirect to "/"
            should should set any key in flash
            should not eql "Codename: Death Identity"
          GET #make_a_rent
            should respond with 302
            should redirect to "/"
            should should set any key in flash
      callbacks
        should have :authenticate_user! as a before_action
        should have :set_movie as a before_action
    
    PagesController
      routing
        should route GET / to/from {:action=>"index", :controller=>"pages"}
      requests
        when user is logged in
          should redirect to "/movies"
        when user is not logged in
          should not redirect to "/movies"
    
    Movie
      validations
        should validate that :name cannot be empty/falsy
        should validate that :synopsis cannot be empty/falsy
        should validate that :rating cannot be empty/falsy
        should validate that :rating is either ‹"G"›, ‹"PG"›, ‹"PG-13"›, or ‹"R"›
      methods
        should respond to #rent_message
        should respond to #as_json
    
    User
      validations
        should validate that :email cannot be empty/falsy
        should validate that :password cannot be empty/falsy
        should validate that :email is unique
        should validate that :password_confirmation matches :password
    
    Finished in 0.44354 seconds (files took 1.08 seconds to load)
    55 examples, 0 failure
