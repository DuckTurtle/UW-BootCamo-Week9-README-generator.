// TODO: Create a function that returns a license badge based on which license is passed in
const dayjs = require('dayjs');
const day = dayjs().format('YYYY');
// creates the badge for the reade me file
function renderLicenseBadge(licenseType) {
  if (licenseType === 'Mit'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (licenseType === 'Apache2'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (licenseType === 'GNU GPLv3'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (licenseType === 'ISC'){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  else if (licenseType === 'Mozilla'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (licenseType === 'WTFPL'){
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
  }
  else {
    return null;
  };
};

// returns license link
function renderLicenseLink(licenseType) {
  if (licenseType === 'Mit'){
    return `(https://opensource.org/licenses/MIT)`
  }
  else if (licenseType === 'Apache2'){
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  else if (licenseType === 'GNU GPLv3'){
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (licenseType === 'ISC'){
    return `(https://opensource.org/licenses/ISC)`
  }
  else if (licenseType === 'Mozilla'){
    return `(https://opensource.org/licenses/MPL-2.0)`
  }
  else if (licenseType === 'WTFPL'){
    return `(http://www.wtfpl.net/about/)`
  }
  else {
    return null;
  };
}

// returns license information
function renderLicenseSection(licenseType, github) {
  if (licenseType === 'Mit'){
    return `Copyright ${day}, ${github}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without 
    restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom 
    the Software is furnished to do so,subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE 
    AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
  else if (licenseType === 'Apache2'){
    return `Copyright ${day}, ${github}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  }
  else if (licenseType === 'GNU GPLv3'){
    return `Copyright ${day}, ${github}

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`
  }
  else if (licenseType === 'ISC'){
    return `Copyright ${day}, ${github}

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission
     notice appear in all copies.
    THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL
     THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT,
      NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
  }
  else if (licenseType === 'Mozilla'){
    return `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at`
  }
  else if (licenseType === 'WTFPL'){
    return `Copyright ${day}, ${github}
    Everyone is permitted to copy and distribute verbatim or modified 
    copies of this license document, and changing it is allowed as long 
    as the name is changed. 
   
               DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
      TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 
   
     0. You just DO WHAT THE FUCK YOU WANT TO.`
  }
  else {
    return null;
  };
}

// TODO:generates readme then passes it back to index file
function generateMarkdown({title, description,usage,alttext,image,contribute,test,github,email, licenseType, install}) {
 //skeltion for the read me file 
return ` ${renderLicenseBadge(licenseType)}
# ${title}

## Description

${description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [contribute](#How to Contribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${install}

## Usage

${usage}

![${alttext}](./assets/images/${image});

## License

${renderLicenseSection(licenseType, github)}
${renderLicenseLink(licenseType)}

## How to Contribute

${contribute}

## Tests

${test}

## Questions

For any questions please inquirer through my git hub ${github} or contact me via email at ${email}.`;


};

module.exports = generateMarkdown;
