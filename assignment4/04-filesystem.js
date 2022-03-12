const fs = require("fs");

// create file

function write(fileName, obj) {
  // Writes <obj> into <fileName>.
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(fileName, JSON.stringify(obj), (err) => {
      if (err) reject(err);
    });
    resolve(console.log("create:", fileName, "created"));
  });

  return promise;
}

// read data

function read(fileName) {
  // Reads data from fileName.
  const promise = new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) reject(console.log(err));
      resolve(console.log("read:", data));
    });
  });

  return promise;
}

// update data

function update(fileName, key, value) {
  // updates filename.key to value.
  const promise = new Promise((resolve, reject) => {
    let data = require(fileName); // get json data.
    data[key] = value; // in this example data.name sets value from args.
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
      if (err) reject(console.log(err));
    });
    resolve(
      console.log("update: " + JSON.stringify(data) + " updating " + fileName)
    );
  });

  return promise;
}

// remove file

function remove(fileName) {
  const promise = new Promise((resolve, reject) => {
    fs.unlink(fileName, (err) => {
      if (err) reject(console.log(err));
      resolve(console.log("delete:", fileName, "file removed."));
    });
  });

  return promise;
}

// call all functions async.

(async () => {
  const target = "./employee.json";
  const employeeData = { name: "Employee 1 Name", salary: 2000 };
  await write(target, employeeData);
  await read(target);
  await update(target, "name", "Updated Employee Name");
  await remove(target);
})();
