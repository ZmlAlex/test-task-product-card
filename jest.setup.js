import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { shallow, render, mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
