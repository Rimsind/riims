const SearchBar = ({ specialities }) => {
  return (
    <>
      <section className="doctor-searchbar">
        <div className="row">
          <div className="col-md-12">
            <div className="searchbar">
              <form
                className="doctor-form-seach rounded text-start shadow p-4"
                style={{ backgroundColor: "#ebefff" }}
              >
                <div className="row align-items-center">
                  <div className="col-md">
                    <div
                      className="input-group bg-white border rounded"
                      style={{ opacity: "0.7" }}
                    >
                      <span className="input-group-text bg-white border-0">
                        <i className="ri-map-pin-line text-primary h5 fw-normal mb-0"></i>
                      </span>
                      <select
                        className="form-select border-0"
                        aria-label="Default select example"
                      >
                        <option selected>Select District</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md">
                    <div
                      className="input-group bg-white border rounded"
                      style={{ opacity: "0.7" }}
                    >
                      <span className="input-group-text bg-white border-0">
                        <i className="ri-map-pin-line text-primary h5 fw-normal mb-0"></i>
                      </span>

                      <select
                        className="form-select border-0"
                        aria-label="Default select example"
                      >
                        <option selected>Select Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md">
                    <div
                      className="input-group bg-white border rounded"
                      style={{ opacity: "0.7" }}
                    >
                      <span className="input-group-text bg-white border-0">
                        <i className="ri-search-line text-primary h5 fw-normal mb-0"></i>
                      </span>
                      <select
                        className="form-select border-0"
                        aria-label="Default select example"
                      >
                        <option selected>Select Department</option>
                        {specialities?.map((curElem) => {
                          return (
                            <option value={curElem.name}>{curElem.name}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="col-md mt-4 mt-sm-0">
                    <div
                      className="input-group bg-white border rounded"
                      style={{ opacity: "0.7" }}
                    >
                      <span className="input-group-text bg-white border-0">
                        <i className="ri-search-line text-primary h5 fw-normal mb-0"></i>
                      </span>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control border-0"
                        placeholder="Seacrh by Name"
                      />
                    </div>
                  </div>

                  <div className="col-md-auto mt-4 mt-sm-0">
                    <div className="d-grid d-md-block">
                      <button type="submit" className="btn btn-primary">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
