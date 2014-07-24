/*
    Copyright (C) 2014  PencilBlue, LLC

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * Parent custom objects controller
 */

function CustomObjects(){}

//inheritance
util.inherits(CustomObjects, pb.BaseController);

CustomObjects.prototype.render = function(cb) {
	self.redirect('/admin/content/custom_objects/manage_object_types', cb);
};

CustomObjects.getPillNavOptions = function() {
    return [
        {
            name: 'new_object_type',
            title: '',
            icon: 'plus',
            href: '/admin/content/custom_objects/new_object_type'
        }
    ];
};

//exports
module.exports = CustomObjects;
