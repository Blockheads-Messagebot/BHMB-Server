(function () {
'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */





function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}







function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class MessageBotExtension {
    /**
     * Creates a new extension.
     * @param id the extension id
     * @param bot the bot that this extension is loaded from
     */
    constructor(id, bot) {
        this.bot = bot;
        /**
         * Any exports that other extensions may call.
         */
        this.exports = {};
        this.storage = bot.storage.prefix(id);
        this.world = bot.world;
    }
    /**
     * Removes the extension, listeners and ui should be removed here. Stored settings should not be removed.
     */
    remove() { }
    /**
     * Removes the extension. All listeners should be removed here.
     */
    uninstall() {
        this.remove();
        this.storage.clear();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3JjL2V4dGVuc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQSxNQUFNO0lBZ0JGOzs7O09BSUc7SUFDSCxZQUFZLEVBQVUsRUFBUyxHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQVY5Qzs7V0FFRztRQUNILFlBQU8sR0FBeUIsRUFBRSxDQUFBO1FBUTlCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFBO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU0sS0FBSSxDQUFDO0lBRVg7O09BRUc7SUFDSCxTQUFTO1FBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb3JsZCB9IGZyb20gJy4vd29ybGQnXHJcbmltcG9ydCB7IE1lc3NhZ2VCb3QgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJ1xyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGFuIGV4dGVuc2lvbiwgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2ggYm90IHRoYXQgdGhlIGV4dGVuc2lvbiBpcyBhdHRhY2hlZCB0by5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV4dGVuc2lvbkluaXRpYWxpemVyID0gKHRoaXM6IE1lc3NhZ2VCb3RFeHRlbnNpb24sIGV4OiBNZXNzYWdlQm90RXh0ZW5zaW9uLCB3b3JsZDogV29ybGQpID0+IHZvaWRcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQm90RXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHByZWZpeGVkIHN0b3JhZ2UgcmVzZXJ2ZWQgZm9yIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBzdG9yYWdlOiBTdG9yYWdlXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIHNob3J0Y3V0IGZvciB0aGlzLmJvdC53b3JsZFxyXG4gICAgICovXHJcbiAgICB3b3JsZDogV29ybGRcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFueSBleHBvcnRzIHRoYXQgb3RoZXIgZXh0ZW5zaW9ucyBtYXkgY2FsbC5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0czoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBleHRlbnNpb24uXHJcbiAgICAgKiBAcGFyYW0gaWQgdGhlIGV4dGVuc2lvbiBpZFxyXG4gICAgICogQHBhcmFtIGJvdCB0aGUgYm90IHRoYXQgdGhpcyBleHRlbnNpb24gaXMgbG9hZGVkIGZyb21cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgcHVibGljIGJvdDogTWVzc2FnZUJvdCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IGJvdC5zdG9yYWdlLnByZWZpeChpZClcclxuICAgICAgICB0aGlzLndvcmxkID0gYm90LndvcmxkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSBleHRlbnNpb24sIGxpc3RlbmVycyBhbmQgdWkgc2hvdWxkIGJlIHJlbW92ZWQgaGVyZS4gU3RvcmVkIHNldHRpbmdzIHNob3VsZCBub3QgYmUgcmVtb3ZlZC5cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIGV4dGVuc2lvbi4gQWxsIGxpc3RlbmVycyBzaG91bGQgYmUgcmVtb3ZlZCBoZXJlLlxyXG4gICAgICovXHJcbiAgICB1bmluc3RhbGwoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKVxyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5jbGVhcigpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==

function equalCaseInsensitive(a, b) {
    return a.localeCompare(b, undefined, { sensitivity: 'base' }) === 0;
}
function arrayContainsAny(haystack, ...needles) {
    return haystack.some(item => needles.some(needle => equalCaseInsensitive(item, needle)));
}
/**
 * Player class which is returned by the [[World.getPlayer]] method. Should not be created by any other method.
 */
class Player {
    /**
     * Creates a new instance of the Player class.
     *
     * @param name The name of the player.
     * @param info The player info stored between bot launches.
     */
    constructor(name, info, lists) {
        this._name = name;
        this._info = info;
        this._lists = lists;
    }
    /**
     * Gets the player's name.
     */
    get name() {
        return this._name;
    }
    /**
     * Gets the most recently used IP of the player.
     */
    get ip() {
        return this._info.ip;
    }
    /**
     * Gets the all IPs used by the player on the world.
     */
    get ips() {
        return [...this._info.ips];
    }
    /**
     * Gets the number of times the player has joined the server.
     */
    get joins() {
        return this._info.joins;
    }
    /**
     * Checks if the player has joined the server.
     */
    get hasJoined() {
        return this.joins > 0;
    }
    /**
     * Returns true if the player is the owner of the server or is the server.
     */
    get isOwner() {
        return !!this._info.owner || this._name == 'SERVER';
    }
    /**
     * Checks if the player is an admin or the owner.
     */
    get isAdmin() {
        // A player is admin if their name or their latest IP is listed on the adminlist, or they are the owner.
        return this.isOwner || arrayContainsAny(this._lists.adminlist, this._name, this._info.ip);
    }
    /**
     * Checks if the player is a mod without admin permissions.
     */
    get isMod() {
        // A player is mod if their name or their latest IP is on the modlist
        return !this.isAdmin && arrayContainsAny(this._lists.modlist, this._name, this._info.ip);
    }
    /**
     * Checks if the player is an admin or a mod.
     */
    get isStaff() {
        return this.isAdmin || this.isMod;
    }
    /**
     * Checks if the player is whitelisted. Is true if the player can join the server while it is whitelisted.
     */
    get isWhitelisted() {
        // A player is whitelisted if they are staff or if their name or latest ip is on the whitelist.
        return this.isStaff || arrayContainsAny(this._lists.whitelist, this._name, this._info.ip);
    }
    /**
     * Checks if the player is banned.
     */
    get isBanned() {
        return !this.isStaff && this._lists.blacklist
            .some(entry => {
            // We don't know the current player's device ID so can't check for that on the blacklist
            // If the player's name is on the blacklist, they are banned.
            // If an IP the player has used is banned, they are *probably* banned, so guess that they are.
            // Remove device ID from blacklist entry, if there is one
            if (entry.includes(' \\'))
                entry = entry.substr(0, entry.indexOf(' \\'));
            if (equalCaseInsensitive(this._name, entry))
                return true;
            if (this._info.ips.includes(entry))
                return true;
            return false;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3JjL3BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSw4QkFBOEIsQ0FBUyxFQUFFLENBQVM7SUFDOUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN0RSxDQUFDO0FBRUQsMEJBQTBCLFFBQWtCLEVBQUUsR0FBRyxPQUFpQjtJQUM5RCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzVGLENBQUM7QUFhRDs7R0FFRztBQUNILE1BQU07SUFLRjs7Ozs7T0FLRztJQUNILFlBQVksSUFBWSxFQUFFLElBQWdCLEVBQUUsS0FBaUI7UUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxJQUFJO1FBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksR0FBRztRQUNILE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLEtBQUs7UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxTQUFTO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksT0FBTztRQUNQLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUE7SUFDdkQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxPQUFPO1FBQ1Asd0dBQXdHO1FBQ3hHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM3RixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLEtBQUs7UUFDTCxxRUFBcUU7UUFDckUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDNUYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxPQUFPO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNyQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLGFBQWE7UUFDYiwrRkFBK0Y7UUFDL0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzdGLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksUUFBUTtRQUNSLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO2FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLHdGQUF3RjtZQUN4Riw2REFBNkQ7WUFDN0QsOEZBQThGO1lBRTlGLHlEQUF5RDtZQUN6RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7WUFFeEUsRUFBRSxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFBO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFBO1lBRS9DLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDaEIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb3JsZExpc3RzIH0gZnJvbSAnYmxvY2toZWFkcy1hcGkvYXBpJ1xyXG5leHBvcnQgeyBXb3JsZExpc3RzIH0gZnJvbSAnYmxvY2toZWFkcy1hcGkvYXBpJ1xyXG5cclxuZnVuY3Rpb24gZXF1YWxDYXNlSW5zZW5zaXRpdmUoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBhLmxvY2FsZUNvbXBhcmUoYiwgdW5kZWZpbmVkLCB7IHNlbnNpdGl2aXR5OiAnYmFzZSd9KSA9PT0gMFxyXG59XHJcblxyXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zQW55KGhheXN0YWNrOiBzdHJpbmdbXSwgLi4ubmVlZGxlczogc3RyaW5nW10pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBoYXlzdGFjay5zb21lKGl0ZW0gPT4gbmVlZGxlcy5zb21lKG5lZWRsZSA9PiBlcXVhbENhc2VJbnNlbnNpdGl2ZShpdGVtLCBuZWVkbGUpKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBwbGF5ZXIgdXNlZCBieSB0aGUgUGxheWVyIGNsYXNzLlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllckluZm8ge1xyXG4gICAgaXA6IHN0cmluZ1xyXG4gICAgaXBzOiBzdHJpbmdbXVxyXG4gICAgam9pbnM6IG51bWJlclxyXG4gICAgb3duZXI/OiBib29sZWFuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQbGF5ZXIgY2xhc3Mgd2hpY2ggaXMgcmV0dXJuZWQgYnkgdGhlIFtbV29ybGQuZ2V0UGxheWVyXV0gbWV0aG9kLiBTaG91bGQgbm90IGJlIGNyZWF0ZWQgYnkgYW55IG90aGVyIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nXHJcbiAgICBwcml2YXRlIF9pbmZvOiBQbGF5ZXJJbmZvXHJcbiAgICBwcml2YXRlIF9saXN0czogV29ybGRMaXN0c1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgUGxheWVyIGNsYXNzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwbGF5ZXIuXHJcbiAgICAgKiBAcGFyYW0gaW5mbyBUaGUgcGxheWVyIGluZm8gc3RvcmVkIGJldHdlZW4gYm90IGxhdW5jaGVzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGluZm86IFBsYXllckluZm8sIGxpc3RzOiBXb3JsZExpc3RzKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWVcclxuICAgICAgICB0aGlzLl9pbmZvID0gaW5mb1xyXG4gICAgICAgIHRoaXMuX2xpc3RzID0gbGlzdHNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHBsYXllcidzIG5hbWUuXHJcbiAgICAgKi9cclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWVcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG1vc3QgcmVjZW50bHkgdXNlZCBJUCBvZiB0aGUgcGxheWVyLlxyXG4gICAgICovXHJcbiAgICBnZXQgaXAoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5mby5pcFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgYWxsIElQcyB1c2VkIGJ5IHRoZSBwbGF5ZXIgb24gdGhlIHdvcmxkLlxyXG4gICAgICovXHJcbiAgICBnZXQgaXBzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMuX2luZm8uaXBzXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBwbGF5ZXIgaGFzIGpvaW5lZCB0aGUgc2VydmVyLlxyXG4gICAgICovXHJcbiAgICBnZXQgam9pbnMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5mby5qb2luc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoZSBwbGF5ZXIgaGFzIGpvaW5lZCB0aGUgc2VydmVyLlxyXG4gICAgICovXHJcbiAgICBnZXQgaGFzSm9pbmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmpvaW5zID4gMFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwbGF5ZXIgaXMgdGhlIG93bmVyIG9mIHRoZSBzZXJ2ZXIgb3IgaXMgdGhlIHNlcnZlci5cclxuICAgICAqL1xyXG4gICAgZ2V0IGlzT3duZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5faW5mby5vd25lciB8fCB0aGlzLl9uYW1lID09ICdTRVJWRVInXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIHBsYXllciBpcyBhbiBhZG1pbiBvciB0aGUgb3duZXIuXHJcbiAgICAgKi9cclxuICAgIGdldCBpc0FkbWluKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIEEgcGxheWVyIGlzIGFkbWluIGlmIHRoZWlyIG5hbWUgb3IgdGhlaXIgbGF0ZXN0IElQIGlzIGxpc3RlZCBvbiB0aGUgYWRtaW5saXN0LCBvciB0aGV5IGFyZSB0aGUgb3duZXIuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPd25lciB8fCBhcnJheUNvbnRhaW5zQW55KHRoaXMuX2xpc3RzLmFkbWlubGlzdCwgdGhpcy5fbmFtZSwgdGhpcy5faW5mby5pcClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiB0aGUgcGxheWVyIGlzIGEgbW9kIHdpdGhvdXQgYWRtaW4gcGVybWlzc2lvbnMuXHJcbiAgICAgKi9cclxuICAgIGdldCBpc01vZCgpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBBIHBsYXllciBpcyBtb2QgaWYgdGhlaXIgbmFtZSBvciB0aGVpciBsYXRlc3QgSVAgaXMgb24gdGhlIG1vZGxpc3RcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNBZG1pbiAmJiBhcnJheUNvbnRhaW5zQW55KHRoaXMuX2xpc3RzLm1vZGxpc3QsIHRoaXMuX25hbWUsIHRoaXMuX2luZm8uaXApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIHBsYXllciBpcyBhbiBhZG1pbiBvciBhIG1vZC5cclxuICAgICAqL1xyXG4gICAgZ2V0IGlzU3RhZmYoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBZG1pbiB8fCB0aGlzLmlzTW9kXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIHBsYXllciBpcyB3aGl0ZWxpc3RlZC4gSXMgdHJ1ZSBpZiB0aGUgcGxheWVyIGNhbiBqb2luIHRoZSBzZXJ2ZXIgd2hpbGUgaXQgaXMgd2hpdGVsaXN0ZWQuXHJcbiAgICAgKi9cclxuICAgIGdldCBpc1doaXRlbGlzdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIEEgcGxheWVyIGlzIHdoaXRlbGlzdGVkIGlmIHRoZXkgYXJlIHN0YWZmIG9yIGlmIHRoZWlyIG5hbWUgb3IgbGF0ZXN0IGlwIGlzIG9uIHRoZSB3aGl0ZWxpc3QuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTdGFmZiB8fCBhcnJheUNvbnRhaW5zQW55KHRoaXMuX2xpc3RzLndoaXRlbGlzdCwgdGhpcy5fbmFtZSwgdGhpcy5faW5mby5pcClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiB0aGUgcGxheWVyIGlzIGJhbm5lZC5cclxuICAgICAqL1xyXG4gICAgZ2V0IGlzQmFubmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc1N0YWZmICYmIHRoaXMuX2xpc3RzLmJsYWNrbGlzdFxyXG4gICAgICAgICAgICAuc29tZShlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBrbm93IHRoZSBjdXJyZW50IHBsYXllcidzIGRldmljZSBJRCBzbyBjYW4ndCBjaGVjayBmb3IgdGhhdCBvbiB0aGUgYmxhY2tsaXN0XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcGxheWVyJ3MgbmFtZSBpcyBvbiB0aGUgYmxhY2tsaXN0LCB0aGV5IGFyZSBiYW5uZWQuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbiBJUCB0aGUgcGxheWVyIGhhcyB1c2VkIGlzIGJhbm5lZCwgdGhleSBhcmUgKnByb2JhYmx5KiBiYW5uZWQsIHNvIGd1ZXNzIHRoYXQgdGhleSBhcmUuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGRldmljZSBJRCBmcm9tIGJsYWNrbGlzdCBlbnRyeSwgaWYgdGhlcmUgaXMgb25lXHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaW5jbHVkZXMoJyBcXFxcJykpIGVudHJ5ID0gZW50cnkuc3Vic3RyKDAsIGVudHJ5LmluZGV4T2YoJyBcXFxcJykpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsQ2FzZUluc2Vuc2l0aXZlKHRoaXMuX25hbWUsIGVudHJ5KSkgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbmZvLmlwcy5pbmNsdWRlcyhlbnRyeSkpIHJldHVybiB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19

/**
 * An event which can be subscribed to and dispatched
 */
class SimpleEvent {
    constructor() {
        this.subscribers = [];
    }
    /**
     * Subscribe to the event.
     * @param listener The listener which will be called when the event is dispatched.
     */
    sub(listener) {
        this.subscribers.push({ listener, once: false });
    }
    /**
     * Unsubscribe from the event.
     * @param listener The listener to remove.
     */
    unsub(listener) {
        let index = this.subscribers.findIndex(sub => listener == sub.listener);
        if (index != -1) {
            this.subscribers.splice(index, 1);
        }
    }
    /**
     * Subscribes to the event only once.
     * @param listener The listener which will be called when the event is dispatched.
     */
    one(listener) {
        this.subscribers.push({ listener, once: true });
    }
    /**
     * Dispatches an event, calling all listeners.
     * @param arg the argument to call listeners with.
     */
    dispatch(arg) {
        this.subscribers.forEach(({ listener, once }) => {
            if (once)
                this.unsub(listener);
            listener(arg);
        });
    }
    /**
     * A helper to avoid exposing undesirable events.
     */
    asEvent() {
        let that = this;
        return {
            sub(listener) {
                return that.sub(listener);
            },
            one(listener) {
                return that.one(listener);
            },
            unsub(listener) {
                return that.unsub(listener);
            },
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3JjL2V2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkE7O0dBRUc7QUFDSCxNQUFNO0lBR0Y7UUFGUSxnQkFBVyxHQUE2QixFQUFFLENBQUE7SUFFbkMsQ0FBQztJQUVoQjs7O09BR0c7SUFDSCxHQUFHLENBQUMsUUFBaUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxRQUFpQztRQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILEdBQUcsQ0FBQyxRQUFpQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsUUFBUSxDQUFDLEdBQWE7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsRUFBRSxFQUFFO1lBQzFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzlCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU87UUFDSCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixNQUFNLENBQUM7WUFDSCxHQUFHLENBQUMsUUFBaUM7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzdCLENBQUM7WUFDRCxHQUFHLENBQUMsUUFBaUM7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzdCLENBQUM7WUFDRCxLQUFLLENBQUMsUUFBaUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQy9CLENBQUM7U0FDSixDQUFBO0lBQ0wsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFN1YnNjcmlwdGlvbjxBcmd1bWVudD4ge1xyXG4gICAgbGlzdGVuZXI6IChhcmc6IEFyZ3VtZW50KSA9PiB2b2lkXHJcbiAgICBvbmNlOiBib29sZWFuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBvYmplY3Qgd2hpY2ggZW5hYmxlcyBzdWJzY3JpYmluZyBhbmQgdW5zdWJzY3JpYmluZyBmcm9tIGFuIGV2ZW50IHdpdGhvdXQgZXhwb3NpbmcgbWV0aG9kcyB0byBmaXJlIHRoZSBldmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2FmZVNpbXBsZUV2ZW50PEFyZ3VtZW50PiB7XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSB0byB0aGUgZXZlbnQuXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHdoaWNoIHdpbGwgYmUgYWRkZWQuXHJcbiAgICAgKi9cclxuICAgIHN1YihsaXN0ZW5lcjogKGFyZzogQXJndW1lbnQpID0+IHZvaWQpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIFVuc3Vic2NyaWJlcyBmcm9tIHRoZSBldmVudC5cclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgd2hpY2ggd2lsbCBiZSByZW1vdmVkLlxyXG4gICAgICovXHJcbiAgICB1bnN1YihsaXN0ZW5lcjogKGFyZzogQXJndW1lbnQpID0+IHZvaWQpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZXMgdG8gdGhlIGV2ZW50IHdpdGggYSBsaXN0ZW5lciB3aGljaCB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uY2UuXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHdoaWNoIHdpbGwgYmUgYWRkZWQuXHJcbiAgICAgKi9cclxuICAgIG9uZShsaXN0ZW5lcjogKGFyZzogQXJndW1lbnQpID0+IHZvaWQpOiB2b2lkXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB3aGljaCBjYW4gYmUgc3Vic2NyaWJlZCB0byBhbmQgZGlzcGF0Y2hlZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50PEFyZ3VtZW50PiB7XHJcbiAgICBwcml2YXRlIHN1YnNjcmliZXJzOiBTdWJzY3JpcHRpb248QXJndW1lbnQ+W10gPSBbXVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSB0byB0aGUgZXZlbnQuXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHdoaWNoIHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV2ZW50IGlzIGRpc3BhdGNoZWQuXHJcbiAgICAgKi9cclxuICAgIHN1YihsaXN0ZW5lcjogKGFyZzogQXJndW1lbnQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goe2xpc3RlbmVyLCBvbmNlOiBmYWxzZX0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBldmVudC5cclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgdG8gcmVtb3ZlLlxyXG4gICAgICovXHJcbiAgICB1bnN1YihsaXN0ZW5lcjogKGFyZzogQXJndW1lbnQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN1YnNjcmliZXJzLmZpbmRJbmRleChzdWIgPT4gbGlzdGVuZXIgPT0gc3ViLmxpc3RlbmVyKVxyXG4gICAgICAgIGlmIChpbmRleCAhPSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmVzIHRvIHRoZSBldmVudCBvbmx5IG9uY2UuXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHdoaWNoIHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV2ZW50IGlzIGRpc3BhdGNoZWQuXHJcbiAgICAgKi9cclxuICAgIG9uZShsaXN0ZW5lcjogKGFyZzogQXJndW1lbnQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goeyBsaXN0ZW5lciwgb25jZTogdHJ1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGF0Y2hlcyBhbiBldmVudCwgY2FsbGluZyBhbGwgbGlzdGVuZXJzLlxyXG4gICAgICogQHBhcmFtIGFyZyB0aGUgYXJndW1lbnQgdG8gY2FsbCBsaXN0ZW5lcnMgd2l0aC5cclxuICAgICAqL1xyXG4gICAgZGlzcGF0Y2goYXJnOiBBcmd1bWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaCgoe2xpc3RlbmVyLCBvbmNlfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob25jZSkgdGhpcy51bnN1YihsaXN0ZW5lcilcclxuICAgICAgICAgICAgbGlzdGVuZXIoYXJnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGhlbHBlciB0byBhdm9pZCBleHBvc2luZyB1bmRlc2lyYWJsZSBldmVudHMuXHJcbiAgICAgKi9cclxuICAgIGFzRXZlbnQoKTogU2FmZVNpbXBsZUV2ZW50PEFyZ3VtZW50PiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3ViKGxpc3RlbmVyOiAoYXJnOiBBcmd1bWVudCkgPT4gdm9pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuc3ViKGxpc3RlbmVyKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmUobGlzdGVuZXI6IChhcmc6IEFyZ3VtZW50KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5vbmUobGlzdGVuZXIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVuc3ViKGxpc3RlbmVyOiAoYXJnOiBBcmd1bWVudCkgPT4gdm9pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQudW5zdWIobGlzdGVuZXIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19

var __awaiter$2 = (window && window.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ChatWatcher {
    /**
     * Creates a new ChatWatcher
     * @param api the api to be used to communicate with chat
     * @param online a shared array with the host world class that this class keeps up to date.
     */
    constructor(api, online) {
        this.api = api;
        this.online = online;
        this._onMessage = new SimpleEvent();
        this._onJoin = new SimpleEvent();
        this._onLeave = new SimpleEvent();
        this._onOther = new SimpleEvent();
        this.timeoutId = null;
        /**
         * Parses a chat message, firing the appropriate events if required.
         */
        this.parse = (message) => {
            let parseError = () => {
                this._onOther.dispatch(message);
            };
            if (/^[^a-z]+ - Player Connected /.test(message)) {
                try {
                    let [, name, ip] = message.match(/Connected ([^a-z]{3,}) \| ([\d.]+) \| .{32}$/);
                    if (!this.online.includes(name)) {
                        this.online.includes(name) || this.online.push(name);
                        this._onJoin.dispatch({ name, ip });
                        return;
                    }
                }
                catch (_) { }
                return parseError();
            }
            if (/^[^a-z]+ - Player Disconnected /.test(message)) {
                try {
                    let [, name] = message.match(/Disconnected ([^a-z]{3,})$/);
                    if (this.online.includes(name)) {
                        this.online.splice(this.online.indexOf(name), 1);
                        this._onLeave.dispatch(name);
                        return;
                    }
                }
                catch (_) { }
                return parseError();
            }
            if (message.slice(0, 18).includes(': ')) {
                let name = this.getUser(message);
                if (name) {
                    message = message.substr(name.length + 2);
                    if (name == 'SERVER' && message.startsWith('/')) {
                        return parseError();
                    }
                    this._onMessage.dispatch({ name, message });
                    return;
                }
            }
            return parseError();
        };
        /**
         * Continually checks chat for new messages
         * @param lastId the ID to pass to the API to get only most recent messages.
         */
        this.checkChat = (lastId) => __awaiter$2(this, void 0, void 0, function* () {
            try {
                let { log, nextId } = yield this.api.getMessages(lastId);
                if (this.timeoutId == null)
                    return;
                log.forEach(this.parse);
                this.timeoutId = setTimeout(this.checkChat, 5000, nextId);
            }
            catch (_) {
                // Network error, wait 30 seconds before retrying
                this.timeoutId = setTimeout(this.checkChat, 30000, 0);
                return;
            }
        });
    }
    /**
     * Event which fires when a player joins the server.
     */
    get onJoin() {
        return this._onJoin.asEvent();
    }
    /**
     * Event which fires when a player leaves the server.
     */
    get onLeave() {
        return this._onLeave.asEvent();
    }
    /**
     * Event which fires when a player sends a message in chat.
     */
    get onMessage() {
        return this._onMessage.asEvent();
    }
    /**
     * Event which fires when a chat message cannot be parsed as a message, join, or leave.
     */
    get onOther() {
        return this._onOther.asEvent();
    }
    /**
     * True if the watcher is currently running, otherwise false.
     */
    get running() {
        return this.timeoutId != null;
    }
    /**
     * Starts the listener. Calling multiple times will not result in multiple listeners being started.
     */
    start() {
        if (this.timeoutId)
            this.stop();
        this.timeoutId = setTimeout(this.checkChat, 0, 0);
    }
    /**
     * Stops the listener if it is running. If not running, does nothing.
     */
    stop() {
        if (this.timeoutId)
            clearTimeout(this.timeoutId);
        this.timeoutId = null;
    }
    /**
     * Parses a message to extract a player name.
     * @param message the message to extract a name from.
     */
    getUser(message) {
        for (let i = 18; i > 4; i--) {
            let possibleName = message.substring(0, message.lastIndexOf(': ', i));
            if (this.online.includes(possibleName) || possibleName == 'SERVER') {
                return possibleName;
            }
        }
        // Player is most likely offline
        if (/[^a-z]{3,16}: /.test(message))
            return message.substring(0, message.lastIndexOf(': ', 18));
        // Invalid name
        return '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdFdhdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvY2hhdFdhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFtQixNQUFNLFVBQVUsQ0FBQTtBQXVCdkQ7OztHQUdHO0FBQ0gsTUFBTTtJQTBDRjs7OztPQUlHO0lBQ0gsWUFBc0IsR0FBa0MsRUFBWSxNQUFnQjtRQUE5RCxRQUFHLEdBQUgsR0FBRyxDQUErQjtRQUFZLFdBQU0sR0FBTixNQUFNLENBQVU7UUE5QzFFLGVBQVUsR0FBa0MsSUFBSSxXQUFXLEVBQUUsQ0FBQTtRQUM3RCxZQUFPLEdBQStCLElBQUksV0FBVyxFQUFFLENBQUE7UUFDdkQsYUFBUSxHQUF3QixJQUFJLFdBQVcsRUFBRSxDQUFBO1FBQ2pELGFBQVEsR0FBd0IsSUFBSSxXQUFXLEVBQUUsQ0FBQTtRQUNqRCxjQUFTLEdBQWlDLElBQUksQ0FBQTtRQTREeEQ7O1dBRUc7UUFDTyxVQUFLLEdBQUcsQ0FBQyxPQUFlLEVBQVEsRUFBRTtZQUN4QyxJQUFJLFVBQVUsR0FBRyxHQUFHLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ25DLENBQUMsQ0FBQTtZQUVELEVBQUUsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQztvQkFDRCxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBcUIsQ0FBQTtvQkFDcEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJ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QyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksWUFBWSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxZQUFZLENBQUE7WUFDdkIsQ0FBQztRQUNMLENBQUM7UUFDRCxnQ0FBZ0M7UUFDaEMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDOUYsZUFBZTtRQUNmLE1BQU0sQ0FBQyxFQUFFLENBQUE7SUFDYixDQUFDO0NBa0JKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29ybGRBcGkgfSBmcm9tICdibG9ja2hlYWRzLWFwaS9hcGknXHJcbmltcG9ydCB7IFNpbXBsZUV2ZW50LCBTYWZlU2ltcGxlRXZlbnQgfSBmcm9tICcuL2V2ZW50cydcclxuLy8gVHlwZXNjcmlwdCBpbmNvcnJlY3RseSB0eXBlcyBjbGVhclRpbWVvdXQgYXMgbm90IGFjY2VwdGluZyBhIE5vZGVKUy5UaW1lclxyXG5kZWNsYXJlIGZ1bmN0aW9uIGNsZWFyVGltZW91dChoYW5kbGU6IG51bWJlciB8IE5vZGVKUy5UaW1lcik6IHZvaWRcclxuXHJcblxyXG4vKipcclxuICogQXJndW1lbnRzIHBhc3NlZCB3aGVuIGEgcGxheWVyIGpvaW5zIHRoZSBzZXJ2ZXJcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBKb2luRXZlbnRBcmdzIHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgaXA6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogQXJndW1lbnRzIHBhc3NlZCB3aGVuIGEgcGxheWVyIG9yIHRoZSBzZXJ2ZXIgc2VuZHMgYSBtZXNzYWdlXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUV2ZW50QXJncyB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIG1lc3NhZ2U6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgY2xhc3MgdXNlZCBieSB0aGUgW1tXb3JsZF1dIGNsYXNzIHRvIHdhdGNoIGNoYXQuXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDaGF0V2F0Y2hlciB7XHJcbiAgICBwcm90ZWN0ZWQgX29uTWVzc2FnZTogU2ltcGxlRXZlbnQ8TWVzc2FnZUV2ZW50QXJncz4gPSBuZXcgU2ltcGxlRXZlbnQoKVxyXG4gICAgcHJvdGVjdGVkIF9vbkpvaW46IFNpbXBsZUV2ZW50PEpvaW5FdmVudEFyZ3M+ID0gbmV3IFNpbXBsZUV2ZW50KClcclxuICAgIHByb3RlY3RlZCBfb25MZWF2ZTogU2ltcGxlRXZlbnQ8c3RyaW5nPiA9IG5ldyBTaW1wbGVFdmVudCgpXHJcbiAgICBwcm90ZWN0ZWQgX29uT3RoZXI6IFNpbXBsZUV2ZW50PHN0cmluZz4gPSBuZXcgU2ltcGxlRXZlbnQoKVxyXG4gICAgcHJvdGVjdGVkIHRpbWVvdXRJZDogTm9kZUpTLlRpbWVyIHwgbnVtYmVyIHwgbnVsbCA9IG51bGxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV2ZW50IHdoaWNoIGZpcmVzIHdoZW4gYSBwbGF5ZXIgam9pbnMgdGhlIHNlcnZlci5cclxuICAgICAqL1xyXG4gICAgZ2V0IG9uSm9pbigpOiBTYWZlU2ltcGxlRXZlbnQ8Sm9pbkV2ZW50QXJncz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vbkpvaW4uYXNFdmVudCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudCB3aGljaCBmaXJlcyB3aGVuIGEgcGxheWVyIGxlYXZlcyB0aGUgc2VydmVyLlxyXG4gICAgICovXHJcbiAgICBnZXQgb25MZWF2ZSgpOiBTYWZlU2ltcGxlRXZlbnQ8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uTGVhdmUuYXNFdmVudCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudCB3aGljaCBmaXJlcyB3aGVuIGEgcGxheWVyIHNlbmRzIGEgbWVzc2FnZSBpbiBjaGF0LlxyXG4gICAgICovXHJcbiAgICBnZXQgb25NZXNzYWdlKCk6IFNhZmVTaW1wbGVFdmVudDxNZXNzYWdlRXZlbnRBcmdzPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uTWVzc2FnZS5hc0V2ZW50KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV2ZW50IHdoaWNoIGZpcmVzIHdoZW4gYSBjaGF0IG1lc3NhZ2UgY2Fubm90IGJlIHBhcnNlZCBhcyBhIG1lc3NhZ2UsIGpvaW4sIG9yIGxlYXZlLlxyXG4gICAgICovXHJcbiAgICBnZXQgb25PdGhlcigpOiBTYWZlU2ltcGxlRXZlbnQ8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uT3RoZXIuYXNFdmVudCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcnVlIGlmIHRoZSB3YXRjaGVyIGlzIGN1cnJlbnRseSBydW5uaW5nLCBvdGhlcndpc2UgZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIGdldCBydW5uaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVvdXRJZCAhPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IENoYXRXYXRjaGVyXHJcbiAgICAgKiBAcGFyYW0gYXBpIHRoZSBhcGkgdG8gYmUgdXNlZCB0byBjb21tdW5pY2F0ZSB3aXRoIGNoYXRcclxuICAgICAqIEBwYXJhbSBvbmxpbmUgYSBzaGFyZWQgYXJyYXkgd2l0aCB0aGUgaG9zdCB3b3JsZCBjbGFzcyB0aGF0IHRoaXMgY2xhc3Mga2VlcHMgdXAgdG8gZGF0ZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFwaTogUGljazxXb3JsZEFwaSwgJ2dldE1lc3NhZ2VzJz4sIHByb3RlY3RlZCBvbmxpbmU6IHN0cmluZ1tdKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHRoZSBsaXN0ZW5lci4gQ2FsbGluZyBtdWx0aXBsZSB0aW1lcyB3aWxsIG5vdCByZXN1bHQgaW4gbXVsdGlwbGUgbGlzdGVuZXJzIGJlaW5nIHN0YXJ0ZWQuXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCkgdGhpcy5zdG9wKClcclxuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQodGhpcy5jaGVja0NoYXQsIDAsIDApXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyB0aGUgbGlzdGVuZXIgaWYgaXQgaXMgcnVubmluZy4gSWYgbm90IHJ1bm5pbmcsIGRvZXMgbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZClcclxuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhcnNlcyBhIGNoYXQgbWVzc2FnZSwgZmlyaW5nIHRoZSBhcHByb3ByaWF0ZSBldmVudHMgaWYgcmVxdWlyZWQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBwYXJzZSA9IChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgcGFyc2VFcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fb25PdGhlci5kaXNwYXRjaChtZXNzYWdlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKC9eW15hLXpdKyAtIFBsYXllciBDb25uZWN0ZWQgLy50ZXN0KG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgWywgbmFtZSwgaXBdID0gbWVzc2FnZS5tYXRjaCgvQ29ubmVjdGVkIChbXmEtel17Myx9KSBcXHwgKFtcXGQuXSspIFxcfCAuezMyfSQvKSBhcyBSZWdFeHBNYXRjaEFycmF5XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub25saW5lLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmxpbmUuaW5jbHVkZXMobmFtZSkgfHwgdGhpcy5vbmxpbmUucHVzaChuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uSm9pbi5kaXNwYXRjaCh7bmFtZSwgaXB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChfKSB7IH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRXJyb3IoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKC9eW15hLXpdKyAtIFBsYXllciBEaXNjb25uZWN0ZWQgLy50ZXN0KG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgWywgbmFtZV0gPSBtZXNzYWdlLm1hdGNoKC9EaXNjb25uZWN0ZWQgKFteYS16XXszLH0pJC8pIGFzIFJlZ0V4cE1hdGNoQXJyYXlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ubGluZS5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25saW5lLnNwbGljZSh0aGlzLm9ubGluZS5pbmRleE9mKG5hbWUpLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uTGVhdmUuZGlzcGF0Y2gobmFtZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoXykgeyB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUVycm9yKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlLnNsaWNlKDAsIDE4KS5pbmNsdWRlcygnOiAnKSkge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZ2V0VXNlcihtZXNzYWdlKVxyXG4gICAgICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2Uuc3Vic3RyKG5hbWUubGVuZ3RoICsgMilcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09ICdTRVJWRVInICYmIG1lc3NhZ2Uuc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRXJyb3IoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX29uTWVzc2FnZS5kaXNwYXRjaCh7bmFtZSwgbWVzc2FnZX0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRXJyb3IoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFyc2VzIGEgbWVzc2FnZSB0byBleHRyYWN0IGEgcGxheWVyIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBleHRyYWN0IGEgbmFtZSBmcm9tLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0VXNlcihtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxODsgaSA+IDQ7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgcG9zc2libGVOYW1lID0gbWVzc2FnZS5zdWJzdHJpbmcoMCwgbWVzc2FnZS5sYXN0SW5kZXhPZignOiAnLCBpKSlcclxuICAgICAgICAgICAgaWYgKHRoaXMub25saW5lLmluY2x1ZGVzKHBvc3NpYmxlTmFtZSkgfHwgcG9zc2libGVOYW1lID09ICdTRVJWRVInKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zc2libGVOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUGxheWVyIGlzIG1vc3QgbGlrZWx5IG9mZmxpbmVcclxuICAgICAgICBpZiAoL1teYS16XXszLDE2fTogLy50ZXN0KG1lc3NhZ2UpKSByZXR1cm4gbWVzc2FnZS5zdWJzdHJpbmcoMCwgbWVzc2FnZS5sYXN0SW5kZXhPZignOiAnLCAxOCkpXHJcbiAgICAgICAgLy8gSW52YWxpZCBuYW1lXHJcbiAgICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250aW51YWxseSBjaGVja3MgY2hhdCBmb3IgbmV3IG1lc3NhZ2VzXHJcbiAgICAgKiBAcGFyYW0gbGFzdElkIHRoZSBJRCB0byBwYXNzIHRvIHRoZSBBUEkgdG8gZ2V0IG9ubHkgbW9zdCByZWNlbnQgbWVzc2FnZXMuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjaGVja0NoYXQgPSBhc3luYyAobGFzdElkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgeyBsb2csIG5leHRJZCB9ID0gYXdhaXQgdGhpcy5hcGkuZ2V0TWVzc2FnZXMobGFzdElkKVxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0SWQgPT0gbnVsbCkgcmV0dXJuXHJcbiAgICAgICAgICAgIGxvZy5mb3JFYWNoKHRoaXMucGFyc2UpXHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCh0aGlzLmNoZWNrQ2hhdCwgNTAwMCwgbmV4dElkKVxyXG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcclxuICAgICAgICAgICAgLy8gTmV0d29yayBlcnJvciwgd2FpdCAzMCBzZWNvbmRzIGJlZm9yZSByZXRyeWluZ1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQodGhpcy5jaGVja0NoYXQsIDMwMDAwLCAwKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19

var __awaiter$1 = (window && window.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cloneDate = (d) => new Date(d.getTime());
const PLAYERS_KEY = 'mb_players';
class World {
    constructor(api, storage) {
        this._cache = {};
        this._events = {
            onJoin: new SimpleEvent(),
            onLeave: new SimpleEvent(),
            onMessage: new SimpleEvent(),
        };
        this._online = [];
        this._lists = { adminlist: [], modlist: [], whitelist: [], blacklist: [] };
        this._commands = new Map();
        /**
         * Gets an overview of the server info
         */
        this.getOverview = (refresh = false) => __awaiter$1(this, void 0, void 0, function* () {
            if (!this._cache.overview || refresh) {
                let overview = yield (this._cache.overview = this._api.getOverview());
                // Add online players to the online list if they aren't already online
                overview.online.forEach(name => this._online.includes(name) || this._online.push(name));
                // Make sure the owner has the owner flag set to true
                this._storage.with(PLAYERS_KEY, {}, players => {
                    players[overview.owner] = players[overview.owner] || { ip: '', ips: [], joins: 0 };
                    players[overview.owner].owner = true;
                });
            }
            let overview = yield this._cache.overview;
            return Object.assign({}, overview, { created: cloneDate(overview.created), last_activity: cloneDate(overview.last_activity), credit_until: cloneDate(overview.credit_until), online: this.online });
        });
        /**
         * Gets the server's lists
         */
        this.getLists = (refresh = false) => {
            if (!this._cache.lists || refresh) {
                this._cache.lists = this._api.getLists().then(lists => this._lists = lists);
            }
            return this._cache.lists
                .then(lists => ({
                adminlist: [...lists.adminlist],
                modlist: [...lists.modlist],
                whitelist: [...lists.whitelist],
                blacklist: [...lists.blacklist]
            }));
        };
        /**
         * Sets the server's lists and reloads the world lists if required.
         *
         * @param lists WorldLists one or more list to update. If a list is not provided it will not be changed.
         * @return a promise which will resolve when the lists have been updated, or throw if an error occurred.
         */
        this.setLists = (lists) => __awaiter$1(this, void 0, void 0, function* () {
            let currentLists = yield this.getLists();
            yield this._api.setLists(Object.assign({}, currentLists, lists));
            yield this.getLists(true);
        });
        /**
         * Gets the server logs
         *
         * @param refresh if true, will get the latest logs, otherwise will returned the cached version.
         */
        this.getLogs = (refresh = false) => __awaiter$1(this, void 0, void 0, function* () {
            if (!this._cache.logs || refresh)
                this._cache.logs = this._api.getLogs();
            let lines = yield this._cache.logs;
            return lines.slice().map(line => (Object.assign({}, line, { timestamp: cloneDate(line.timestamp) })));
        });
        /**
         * Sends the specified message, returns a promise that will reject if the send fails and resolve otherwise.
         *
         * @param message the message to send
         */
        this.send = (message) => {
            if (message.startsWith('/'))
                this._events.onMessage.dispatch({ player: this.getPlayer('SERVER'), message });
            return this._api.send(message);
        };
        /**
         * Gets a specific player by name
         */
        this.getPlayer = (name) => {
            name = name.toLocaleUpperCase();
            let players = this._storage.get(PLAYERS_KEY, {});
            return new Player(name, players[name] || { ip: '', ips: [], joins: 0 }, this._lists);
        };
        /**
         * Adds a listener for a single command, can be used when a command can be statically matched.
         *
         * @param command the command that the listener should be called for, case insensitive
         * @param listener the function which should be called whenever the command is used
         * @example
         * world.addCommand('marco', () => { ex.bot.send('Polo!'); });
         */
        this.addCommand = (command, listener) => {
            command = command.toLocaleUpperCase();
            if (this._commands.has(command)) {
                throw new Error(`The command "${command}" has already been added.`);
            }
            this._commands.set(command, listener);
        };
        /**
         * Removes a listener for a command, if it exists.
         *
         * @param command the command for which the listener should be removed.
         */
        this.removeCommand = (command) => {
            this._commands.delete(command.toLocaleUpperCase());
        };
        /**
         * Starts the world, if it is not already started. Will not reject.
         */
        this.start = () => this._api.start();
        /**
         * Stops the world if it is running. Will not throw.
         */
        this.stop = () => this._api.stop();
        /**
         * Sends a restart request, if the world is offline no actions will be taken.
         */
        this.restart = () => this._api.restart();
        this._api = api;
        this._storage = storage;
        this._createWatcher();
        this.getOverview(); // Sets the owner, gets initial online players
        this.getLists(); // Loads the current server lists
    }
    /**
     * Fires whenever a player joins the server
     */
    get onJoin() {
        return this._events.onJoin.asEvent();
    }
    /**
     * Fires whenever a player leaves the server.
     */
    get onLeave() {
        return this._events.onLeave.asEvent();
    }
    /**
     * Fires whenever a player or the server sends a message in chat.
     * Includes messages starting with /
     */
    get onMessage() {
        return this._events.onMessage.asEvent();
    }
    /**
     * Fires whenever a message that cannot be parsed is encountered.
     */
    get onOther() {
        // This class doesn't do anything with the onOther events, so just pass it through.
        return this._chatWatcher.onOther;
    }
    /**
     * Gets the currently online players
     */
    get online() {
        return [...this._online];
    }
    /**
     * Gets all players who have joined the server
     */
    get players() {
        let players = this._storage.get(PLAYERS_KEY, {});
        return Object.keys(players).map(this.getPlayer);
    }
    /**
     * Internal init function
     */
    _createWatcher() {
        let watcher = this._chatWatcher = new ChatWatcher(this._api, this._online);
        watcher.onJoin.sub(({ name, ip }) => {
            name = name.toLocaleUpperCase();
            this._storage.with(PLAYERS_KEY, {}, players => {
                let player = players[name] = players[name] || { ip, ips: [ip], joins: 0 };
                player.joins++;
                player.ip = ip;
                if (!player.ips.includes(ip))
                    player.ips.push(ip);
            });
            this._events.onJoin.dispatch(this.getPlayer(name));
        });
        watcher.onLeave.sub(name => this._events.onLeave.dispatch(this.getPlayer(name)));
        watcher.onMessage.sub(({ name, message }) => {
            this._events.onMessage.dispatch({ player: this.getPlayer(name), message });
        });
        this.onMessage.sub(({ player, message }) => {
            if (/^\/[^ ]/.test(message)) {
                let [, command, args] = message.match(/^\/([^ ]+) ?(.*)$/);
                let handler = this._commands.get(command.toLocaleUpperCase());
                if (handler)
                    handler(player, args);
            }
        });
        watcher.start();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ybGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvd29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsTUFBTSxFQUFjLE1BQU0sVUFBVSxDQUFBO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBbUIsTUFBTSxVQUFVLENBQUE7QUFFdkQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0FBRXBELE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQTtBQUdoQyxNQUFNO0lBcUJGLFlBQVksR0FBYSxFQUFFLE9BQWdCO1FBaEJuQyxXQUFNLEdBSVYsRUFBRSxDQUFBO1FBRUUsWUFBTyxHQUFHO1lBQ2QsTUFBTSxFQUFFLElBQUksV0FBVyxFQUFVO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLFdBQVcsRUFBVTtZQUNsQyxTQUFTLEVBQUUsSUFBSSxXQUFXLEVBQXFDO1NBQ2xFLENBQUE7UUFFUyxZQUFPLEdBQWEsRUFBRSxDQUFBO1FBQ3RCLFdBQU0sR0FBZSxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUMsQ0FBQTtRQUMvRSxjQUFTLEdBQXdELElBQUksR0FBRyxFQUFFLENBQUE7UUF3RHBGOztXQUVHO1FBQ0gsZ0JBQVcsR0FBRyxDQUFPLE9BQU8sR0FBRyxLQUFLLEVBQTBCLEVBQUU7WUFDNUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcs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Q0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUU7WUFDckMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFxQixDQUFBO2dCQUM5RSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBO2dCQUM3RCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7b0JBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUN0QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDbkIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIC9hcGkgZXhwb3J0IG9mIGJsb2NraGVhZHMtYXBpIG9ubHkgY29udGFpbnMgdHlwZXNjcmlwdCBpbnRlcmZhY2VzXHJcbi8vIFNvIG5vIGNvZGUgd2lsbCBiZSBpbXBvcnRlZCBoZXJlLlxyXG5pbXBvcnQgeyBXb3JsZEFwaSwgTG9nRW50cnksIFdvcmxkT3ZlcnZpZXcsIFdvcmxkTGlzdHMgfSBmcm9tICdibG9ja2hlYWRzLWFwaS9hcGknXHJcblxyXG5pbXBvcnQgeyBQbGF5ZXIsIFBsYXllckluZm8gfSBmcm9tICcuL3BsYXllcidcclxuaW1wb3J0IHsgQ2hhdFdhdGNoZXIgfSBmcm9tICcuL2NoYXRXYXRjaGVyJ1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJ1xyXG5pbXBvcnQgeyBTaW1wbGVFdmVudCwgU2FmZVNpbXBsZUV2ZW50IH0gZnJvbSAnLi9ldmVudHMnXHJcblxyXG5jb25zdCBjbG9uZURhdGUgPSAoZDogRGF0ZSkgPT4gbmV3IERhdGUoZC5nZXRUaW1lKCkpXHJcblxyXG5jb25zdCBQTEFZRVJTX0tFWSA9ICdtYl9wbGF5ZXJzJ1xyXG50eXBlIFBsYXllclN0b3JhZ2UgPSB7W25hbWU6IHN0cmluZ106IFBsYXllckluZm99XHJcblxyXG5leHBvcnQgY2xhc3MgV29ybGQge1xyXG4gICAgcHJvdGVjdGVkIF9hcGk6IFdvcmxkQXBpXHJcbiAgICBwcm90ZWN0ZWQgX3N0b3JhZ2U6IFN0b3JhZ2VcclxuICAgIHByb3RlY3RlZCBfY2hhdFdhdGNoZXI6IENoYXRXYXRjaGVyXHJcblxyXG4gICAgcHJpdmF0ZSBfY2FjaGU6IHtcclxuICAgICAgICBsb2dzPzogUHJvbWlzZTxMb2dFbnRyeVtdPlxyXG4gICAgICAgIG92ZXJ2aWV3PzogUHJvbWlzZTxXb3JsZE92ZXJ2aWV3PlxyXG4gICAgICAgIGxpc3RzPzogUHJvbWlzZTxXb3JsZExpc3RzPlxyXG4gICAgfSA9IHt9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXZlbnRzID0ge1xyXG4gICAgICAgIG9uSm9pbjogbmV3IFNpbXBsZUV2ZW50PFBsYXllcj4oKSxcclxuICAgICAgICBvbkxlYXZlOiBuZXcgU2ltcGxlRXZlbnQ8UGxheWVyPigpLFxyXG4gICAgICAgIG9uTWVzc2FnZTogbmV3IFNpbXBsZUV2ZW50PHtwbGF5ZXI6IFBsYXllciwgbWVzc2FnZTogc3RyaW5nfT4oKSxcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29ubGluZTogc3RyaW5nW10gPSBbXVxyXG4gICAgcHJvdGVjdGVkIF9saXN0czogV29ybGRMaXN0cyA9IHthZG1pbmxpc3Q6IFtdLCBtb2RsaXN0OiBbXSwgd2hpdGVsaXN0OiBbXSwgYmxhY2tsaXN0OiBbXX1cclxuICAgIHByb3RlY3RlZCBfY29tbWFuZHM6IE1hcDxzdHJpbmcsIChwbGF5ZXI6IFBsYXllciwgYXJnczogc3RyaW5nKSA9PiB2b2lkPiA9IG5ldyBNYXAoKVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFwaTogV29ybGRBcGksIHN0b3JhZ2U6IFN0b3JhZ2UpIHtcclxuICAgICAgICB0aGlzLl9hcGkgPSBhcGlcclxuICAgICAgICB0aGlzLl9zdG9yYWdlID0gc3RvcmFnZVxyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVXYXRjaGVyKClcclxuICAgICAgICB0aGlzLmdldE92ZXJ2aWV3KCkgLy8gU2V0cyB0aGUgb3duZXIsIGdldHMgaW5pdGlhbCBvbmxpbmUgcGxheWVyc1xyXG4gICAgICAgIHRoaXMuZ2V0TGlzdHMoKSAvLyBMb2FkcyB0aGUgY3VycmVudCBzZXJ2ZXIgbGlzdHNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpcmVzIHdoZW5ldmVyIGEgcGxheWVyIGpvaW5zIHRoZSBzZXJ2ZXJcclxuICAgICAqL1xyXG4gICAgZ2V0IG9uSm9pbigpOiBTYWZlU2ltcGxlRXZlbnQ8UGxheWVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cy5vbkpvaW4uYXNFdmVudCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlcyB3aGVuZXZlciBhIHBsYXllciBsZWF2ZXMgdGhlIHNlcnZlci5cclxuICAgICAqL1xyXG4gICAgZ2V0IG9uTGVhdmUoKTogU2FmZVNpbXBsZUV2ZW50PFBsYXllcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHMub25MZWF2ZS5hc0V2ZW50KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpcmVzIHdoZW5ldmVyIGEgcGxheWVyIG9yIHRoZSBzZXJ2ZXIgc2VuZHMgYSBtZXNzYWdlIGluIGNoYXQuXHJcbiAgICAgKiBJbmNsdWRlcyBtZXNzYWdlcyBzdGFydGluZyB3aXRoIC9cclxuICAgICAqL1xyXG4gICAgZ2V0IG9uTWVzc2FnZSgpOiBTYWZlU2ltcGxlRXZlbnQ8e3BsYXllcjogUGxheWVyLCBtZXNzYWdlOiBzdHJpbmd9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cy5vbk1lc3NhZ2UuYXNFdmVudCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlcyB3aGVuZXZlciBhIG1lc3NhZ2UgdGhhdCBjYW5ub3QgYmUgcGFyc2VkIGlzIGVuY291bnRlcmVkLlxyXG4gICAgICovXHJcbiAgICBnZXQgb25PdGhlcigpOiBTYWZlU2ltcGxlRXZlbnQ8c3RyaW5nPiB7XHJcbiAgICAgICAgLy8gVGhpcyBjbGFzcyBkb2Vzbid0IGRvIGFueXRoaW5nIHdpdGggdGhlIG9uT3RoZXIgZXZlbnRzLCBzbyBqdXN0IHBhc3MgaXQgdGhyb3VnaC5cclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hhdFdhdGNoZXIub25PdGhlclxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudGx5IG9ubGluZSBwbGF5ZXJzXHJcbiAgICAgKi9cclxuICAgIGdldCBvbmxpbmUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5fb25saW5lXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbGwgcGxheWVycyB3aG8gaGF2ZSBqb2luZWQgdGhlIHNlcnZlclxyXG4gICAgICovXHJcbiAgICBnZXQgcGxheWVycygpOiBQbGF5ZXJbXSB7XHJcbiAgICAgICAgbGV0IHBsYXllcnMgPSB0aGlzLl9zdG9yYWdlLmdldDxQbGF5ZXJTdG9yYWdlPihQTEFZRVJTX0tFWSwge30pXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBsYXllcnMpLm1hcCh0aGlzLmdldFBsYXllcilcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYW4gb3ZlcnZpZXcgb2YgdGhlIHNlcnZlciBpbmZvXHJcbiAgICAgKi9cclxuICAgIGdldE92ZXJ2aWV3ID0gYXN5bmMgKHJlZnJlc2ggPSBmYWxzZSk6IFByb21pc2U8V29ybGRPdmVydmlldz4gPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUub3ZlcnZpZXcgfHwgcmVmcmVzaCkge1xyXG4gICAgICAgICAgICBsZXQgb3ZlcnZpZXcgPSBhd2FpdCAodGhpcy5fY2FjaGUub3ZlcnZpZXcgPSB0aGlzLl9hcGkuZ2V0T3ZlcnZpZXcoKSlcclxuICAgICAgICAgICAgLy8gQWRkIG9ubGluZSBwbGF5ZXJzIHRvIHRoZSBvbmxpbmUgbGlzdCBpZiB0aGV5IGFyZW4ndCBhbHJlYWR5IG9ubGluZVxyXG4gICAgICAgICAgICBvdmVydmlldy5vbmxpbmUuZm9yRWFjaChuYW1lID0+IHRoaXMuX29ubGluZS5pbmNsdWRlcyhuYW1lKSB8fCB0aGlzLl9vbmxpbmUucHVzaChuYW1lKSlcclxuXHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgb3duZXIgaGFzIHRoZSBvd25lciBmbGFnIHNldCB0byB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uud2l0aDxQbGF5ZXJTdG9yYWdlPihQTEFZRVJTX0tFWSwge30sIHBsYXllcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyc1tvdmVydmlldy5vd25lcl0gPSBwbGF5ZXJzW292ZXJ2aWV3Lm93bmVyXSB8fCB7IGlwOiAnJywgaXBzOiBbXSwgam9pbnM6IDAgfVxyXG4gICAgICAgICAgICAgICAgcGxheWVyc1tvdmVydmlldy5vd25lcl0ub3duZXIgPSB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3ZlcnZpZXcgPSBhd2FpdCB0aGlzLl9jYWNoZS5vdmVydmlld1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLm92ZXJ2aWV3LFxyXG4gICAgICAgICAgICBjcmVhdGVkOiBjbG9uZURhdGUob3ZlcnZpZXcuY3JlYXRlZCksXHJcbiAgICAgICAgICAgIGxhc3RfYWN0aXZpdHk6IGNsb25lRGF0ZShvdmVydmlldy5sYXN0X2FjdGl2aXR5KSxcclxuICAgICAgICAgICAgY3JlZGl0X3VudGlsOiBjbG9uZURhdGUob3ZlcnZpZXcuY3JlZGl0X3VudGlsKSxcclxuICAgICAgICAgICAgb25saW5lOiB0aGlzLm9ubGluZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHNlcnZlcidzIGxpc3RzXHJcbiAgICAgKi9cclxuICAgIGdldExpc3RzID0gKHJlZnJlc2ggPSBmYWxzZSk6IFByb21pc2U8V29ybGRMaXN0cz4gPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUubGlzdHMgfHwgcmVmcmVzaCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWNoZS5saXN0cyA9IHRoaXMuX2FwaS5nZXRMaXN0cygpLnRoZW4obGlzdHMgPT4gdGhpcy5fbGlzdHMgPSBsaXN0cylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS5saXN0c1xyXG4gICAgICAgICAgICAudGhlbihsaXN0cyA9PiAoe1xyXG4gICAgICAgICAgICAgICAgYWRtaW5saXN0OiBbLi4ubGlzdHMuYWRtaW5saXN0XSxcclxuICAgICAgICAgICAgICAgIG1vZGxpc3Q6IFsuLi5saXN0cy5tb2RsaXN0XSxcclxuICAgICAgICAgICAgICAgIHdoaXRlbGlzdDogWy4uLmxpc3RzLndoaXRlbGlzdF0sXHJcbiAgICAgICAgICAgICAgICBibGFja2xpc3Q6IFsuLi5saXN0cy5ibGFja2xpc3RdXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc2VydmVyJ3MgbGlzdHMgYW5kIHJlbG9hZHMgdGhlIHdvcmxkIGxpc3RzIGlmIHJlcXVpcmVkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsaXN0cyBXb3JsZExpc3RzIG9uZSBvciBtb3JlIGxpc3QgdG8gdXBkYXRlLiBJZiBhIGxpc3QgaXMgbm90IHByb3ZpZGVkIGl0IHdpbGwgbm90IGJlIGNoYW5nZWQuXHJcbiAgICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB3aGljaCB3aWxsIHJlc29sdmUgd2hlbiB0aGUgbGlzdHMgaGF2ZSBiZWVuIHVwZGF0ZWQsIG9yIHRocm93IGlmIGFuIGVycm9yIG9jY3VycmVkLlxyXG4gICAgICovXHJcbiAgICBzZXRMaXN0cyA9IGFzeW5jIChsaXN0czogUGFydGlhbDxXb3JsZExpc3RzPik6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50TGlzdHMgPSBhd2FpdCB0aGlzLmdldExpc3RzKClcclxuICAgICAgICBhd2FpdCB0aGlzLl9hcGkuc2V0TGlzdHMoey4uLmN1cnJlbnRMaXN0cywgLi4ubGlzdHN9KVxyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0TGlzdHModHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHNlcnZlciBsb2dzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJlZnJlc2ggaWYgdHJ1ZSwgd2lsbCBnZXQgdGhlIGxhdGVzdCBsb2dzLCBvdGhlcndpc2Ugd2lsbCByZXR1cm5lZCB0aGUgY2FjaGVkIHZlcnNpb24uXHJcbiAgICAgKi9cclxuICAgIGdldExvZ3MgPSBhc3luYyAocmVmcmVzaCA9IGZhbHNlKTogUHJvbWlzZTxMb2dFbnRyeVtdPiA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZS5sb2dzIHx8IHJlZnJlc2gpIHRoaXMuX2NhY2hlLmxvZ3MgPSB0aGlzLl9hcGkuZ2V0TG9ncygpXHJcbiAgICAgICAgbGV0IGxpbmVzID0gYXdhaXQgdGhpcy5fY2FjaGUubG9nc1xyXG4gICAgICAgIHJldHVybiBsaW5lcy5zbGljZSgpLm1hcChsaW5lID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmxpbmUsXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogY2xvbmVEYXRlKGxpbmUudGltZXN0YW1wKVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlamVjdCBpZiB0aGUgc2VuZCBmYWlscyBhbmQgcmVzb2x2ZSBvdGhlcndpc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gc2VuZFxyXG4gICAgICovXHJcbiAgICBzZW5kID0gKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgIGlmIChtZXNzYWdlLnN0YXJ0c1dpdGgoJy8nKSkgdGhpcy5fZXZlbnRzLm9uTWVzc2FnZS5kaXNwYXRjaCh7IHBsYXllcjogdGhpcy5nZXRQbGF5ZXIoJ1NFUlZFUicpLCBtZXNzYWdlfSlcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBpLnNlbmQobWVzc2FnZSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIHNwZWNpZmljIHBsYXllciBieSBuYW1lXHJcbiAgICAgKi9cclxuICAgIGdldFBsYXllciA9IChuYW1lOiBzdHJpbmcpOiBQbGF5ZXIgPT4ge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG9jYWxlVXBwZXJDYXNlKClcclxuICAgICAgICBsZXQgcGxheWVycyA9IHRoaXMuX3N0b3JhZ2UuZ2V0PFBsYXllclN0b3JhZ2U+KFBMQVlFUlNfS0VZLCB7fSlcclxuICAgICAgICByZXR1cm4gbmV3IFBsYXllcihuYW1lLCBwbGF5ZXJzW25hbWVdIHx8IHtpcDogJycsIGlwczogW10sIGpvaW5zOiAwfSwgdGhpcy5fbGlzdHMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgZm9yIGEgc2luZ2xlIGNvbW1hbmQsIGNhbiBiZSB1c2VkIHdoZW4gYSBjb21tYW5kIGNhbiBiZSBzdGF0aWNhbGx5IG1hdGNoZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbW1hbmQgdGhlIGNvbW1hbmQgdGhhdCB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGNhbGxlZCBmb3IsIGNhc2UgaW5zZW5zaXRpdmVcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciB0aGUgZnVuY3Rpb24gd2hpY2ggc2hvdWxkIGJlIGNhbGxlZCB3aGVuZXZlciB0aGUgY29tbWFuZCBpcyB1c2VkXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogd29ybGQuYWRkQ29tbWFuZCgnbWFyY28nLCAoKSA9PiB7IGV4LmJvdC5zZW5kKCdQb2xvIScpOyB9KTtcclxuICAgICAqL1xyXG4gICAgYWRkQ29tbWFuZCA9IChjb21tYW5kOiBzdHJpbmcsIGxpc3RlbmVyOiAocGxheWVyOiBQbGF5ZXIsIGFyZ3M6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbW1hbmQgPSBjb21tYW5kLnRvTG9jYWxlVXBwZXJDYXNlKClcclxuICAgICAgICBpZiAodGhpcy5fY29tbWFuZHMuaGFzKGNvbW1hbmQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNvbW1hbmQgXCIke2NvbW1hbmR9XCIgaGFzIGFscmVhZHkgYmVlbiBhZGRlZC5gKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb21tYW5kcy5zZXQoY29tbWFuZCwgbGlzdGVuZXIpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZm9yIGEgY29tbWFuZCwgaWYgaXQgZXhpc3RzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb21tYW5kIHRoZSBjb21tYW5kIGZvciB3aGljaCB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIHJlbW92ZWQuXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUNvbW1hbmQgPSAoY29tbWFuZDogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5fY29tbWFuZHMuZGVsZXRlKGNvbW1hbmQudG9Mb2NhbGVVcHBlckNhc2UoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyB0aGUgd29ybGQsIGlmIGl0IGlzIG5vdCBhbHJlYWR5IHN0YXJ0ZWQuIFdpbGwgbm90IHJlamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhcnQgPSAoKSA9PiB0aGlzLl9hcGkuc3RhcnQoKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgdGhlIHdvcmxkIGlmIGl0IGlzIHJ1bm5pbmcuIFdpbGwgbm90IHRocm93LlxyXG4gICAgICovXHJcbiAgICBzdG9wID0gKCkgPT4gdGhpcy5fYXBpLnN0b3AoKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZHMgYSByZXN0YXJ0IHJlcXVlc3QsIGlmIHRoZSB3b3JsZCBpcyBvZmZsaW5lIG5vIGFjdGlvbnMgd2lsbCBiZSB0YWtlbi5cclxuICAgICAqL1xyXG4gICAgcmVzdGFydCA9ICgpID0+IHRoaXMuX2FwaS5yZXN0YXJ0KClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsIGluaXQgZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVXYXRjaGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3YXRjaGVyID0gdGhpcy5fY2hhdFdhdGNoZXIgPSBuZXcgQ2hhdFdhdGNoZXIodGhpcy5fYXBpLCB0aGlzLl9vbmxpbmUpXHJcblxyXG4gICAgICAgIHdhdGNoZXIub25Kb2luLnN1YigoeyBuYW1lLCBpcCB9KSA9PiB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnRvTG9jYWxlVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS53aXRoPFBsYXllclN0b3JhZ2U+KFBMQVlFUlNfS0VZLCB7fSwgcGxheWVycyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gcGxheWVyc1tuYW1lXSA9IHBsYXllcnNbbmFtZV0gfHwgeyBpcCwgaXBzOiBbaXBdLCBqb2luczogMCB9XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuam9pbnMrK1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmlwID0gaXBcclxuICAgICAgICAgICAgICAgIGlmICghcGxheWVyLmlwcy5pbmNsdWRlcyhpcCkpIHBsYXllci5pcHMucHVzaChpcClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLm9uSm9pbi5kaXNwYXRjaCh0aGlzLmdldFBsYXllcihuYW1lKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB3YXRjaGVyLm9uTGVhdmUuc3ViKG5hbWUgPT4gdGhpcy5fZXZlbnRzLm9uTGVhdmUuZGlzcGF0Y2godGhpcy5nZXRQbGF5ZXIobmFtZSkpKVxyXG5cclxuICAgICAgICB3YXRjaGVyLm9uTWVzc2FnZS5zdWIoKHsgbmFtZSwgbWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5vbk1lc3NhZ2UuZGlzcGF0Y2goeyBwbGF5ZXI6IHRoaXMuZ2V0UGxheWVyKG5hbWUpLCBtZXNzYWdlIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5vbk1lc3NhZ2Uuc3ViKCh7cGxheWVyLCBtZXNzYWdlfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoL15cXC9bXiBdLy50ZXN0KG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgWywgY29tbWFuZCwgYXJnc10gPSBtZXNzYWdlLm1hdGNoKC9eXFwvKFteIF0rKSA/KC4qKSQvKSBhcyBSZWdFeHBNYXRjaEFycmF5XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMuX2NvbW1hbmRzLmdldChjb21tYW5kLnRvTG9jYWxlVXBwZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcikgaGFuZGxlcihwbGF5ZXIsIGFyZ3MpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB3YXRjaGVyLnN0YXJ0KClcclxuICAgIH1cclxufSJdfQ==

/**
 * The storage class used by the [[MessageBot]] class and all [[MessageBotExtension]] instances.
 */
class Storage {
    /**
     * Utility method to use and automatically save a key
     * @param key the key use when getting and setting the value
     * @param fallback the fallback if the key doesn't exist
     * @param callback the function to be called with the data, if the callback returns null or undefined, it is assumed that the value has been mutated and will be saved.
     */
    with(key, fallback, callback) {
        let value = this.get(key, fallback);
        let result = callback(value);
        this.set(key, result == null ? value : result);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsTUFBTTtJQXFDRjs7Ozs7T0FLRztJQUNILElBQUksQ0FBSSxHQUFXLEVBQUUsUUFBVyxFQUFFLFFBQWdDO1FBQzlELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ25DLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2xELENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGUgc3RvcmFnZSBjbGFzcyB1c2VkIGJ5IHRoZSBbW01lc3NhZ2VCb3RdXSBjbGFzcyBhbmQgYWxsIFtbTWVzc2FnZUJvdEV4dGVuc2lvbl1dIGluc3RhbmNlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdG9yYWdlIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc3BlY2lmaWVkIGtleSBmcm9tIHRoZSBzdG9yYWdlLCBpZiB0aGUga2V5IGhhcyBub3QgYmVlbiBzZXQsIHJldHVybnMgdGhlIGZhbGxiYWNrLlxyXG4gICAgICogTm90ZSB0aGF0IHRob3VnaCB0aGlzIGlzIHR5cGVkIGFzIHRoZSB0eXBlIG9mIHRoZSBmYWxsYmFjayBiZWluZyByZXR1cm5lZCwgYSBkZWVwIGNvbXBhcmlzb24gd2lsbCBub3QgYmUgdXNlZC5cclxuICAgICAqIFlvdSBtdXN0IHZhbGlkYXRlIHlvdXIgb3duIG9iamVjdHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGdldFxyXG4gICAgICogQHBhcmFtIGZhbGxiYWNrIGlmIHRoZSBrZXkgd2FzIG5vdCBzZXQsIHRoaXMgd2lsbCBiZSByZXR1cm5lZC5cclxuICAgICAqIEByZXR1cm5zIHRoZSBzdG9yZWQgdmFsdWUgZm9yIHRoZSBrZXkuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldDxUPihrZXk6IHN0cmluZywgZmFsbGJhY2s6IFQpOiBUXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzcGVjaWZpZWQga2V5IGluIHRoZSBzdG9yYWdlLCBvdmVyd3JpdGluZyBhbnkgY3VycmVudCBkYXRhLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBzZXRcclxuICAgICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgdG8gc2V0IGluIHRoZSBzdG9yYWdlLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgYWxsIGtleXMgdXNpbmcgdGhlIGN1cnJlbnQgcHJlZml4LCBvciB0aGUgY3VycmVudCBwcmVmaXggYW5kIHRoZSBhZGRpdGlvbmFsIHByZWZpeCBpZiBzdXBwbGllZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcHJlZml4IHRoZSBwcmVmaXggdG8gbGltaXQgY2xlYXJpbmcgdG9cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgY2xlYXIocHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHdpdGggdGhlIGN1cnJlbnQgcHJlZml4IGFuZCB0aGUgYWRkaXRpb25hbCBwcmVmaXggc3VwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHByZWZpeChwcmVmaXg6IHN0cmluZyk6IFN0b3JhZ2VcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYWxsIHN0b3JhZ2Uga2V5cyBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgc3RvcmFnZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qga2V5cyhwcmVmaXg/OiBzdHJpbmcpOiBzdHJpbmdbXVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXRpbGl0eSBtZXRob2QgdG8gdXNlIGFuZCBhdXRvbWF0aWNhbGx5IHNhdmUgYSBrZXlcclxuICAgICAqIEBwYXJhbSBrZXkgdGhlIGtleSB1c2Ugd2hlbiBnZXR0aW5nIGFuZCBzZXR0aW5nIHRoZSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGZhbGxiYWNrIHRoZSBmYWxsYmFjayBpZiB0aGUga2V5IGRvZXNuJ3QgZXhpc3RcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdpdGggdGhlIGRhdGEsIGlmIHRoZSBjYWxsYmFjayByZXR1cm5zIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHZhbHVlIGhhcyBiZWVuIG11dGF0ZWQgYW5kIHdpbGwgYmUgc2F2ZWQuXHJcbiAgICAgKi9cclxuICAgIHdpdGg8VD4oa2V5OiBzdHJpbmcsIGZhbGxiYWNrOiBULCBjYWxsYmFjazogKHZhbHVlOiBUKSA9PiBUIHwgdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0KGtleSwgZmFsbGJhY2spXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrKHZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0KGtleSwgcmVzdWx0ID09IG51bGwgPyB2YWx1ZSA6IHJlc3VsdClcclxuICAgIH1cclxufSJdfQ==

var __rest$1 = (window && window.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
let registeredExtensions = new Map();
let extensionRegistered = new SimpleEvent();
let extensionDeregistered = new SimpleEvent();
class MessageBot$1 {
    /**
     *
     * @param storage The storage instance to be used by the bot.
     * @param info The world info that is used to create the API to interact with the world.
     */
    constructor(storage, info) {
        this.storage = storage;
        /**
         * All loaded extension instances for this bot.
         */
        this._extensions = new Map();
        if (!MessageBot$1.dependencies)
            throw new Error('Dependencies must be set before creating this class.');
        this.world = new World(new MessageBot$1.dependencies.Api(info), storage);
    }
    /**
     * Registers an extension that can be loaded by instances of the bot.
     * Note: If an extension has already been loaded from a previously registered initializer, it will not be overwritten.
     * @param id the extension ID, will be normalized to lower case.
     * @param initializer the function to be called to set up the extension.
     */
    static registerExtension(id, initializer) {
        id = id.toLocaleLowerCase();
        registeredExtensions.set(id, initializer);
        extensionRegistered.dispatch(id);
    }
    /**
     * Removes an extension initializer from the registry, can be used to prevent an extension from being loaded in multiple bots at once (generally a bad idea).
     * @param id the id of the extension to deregister
     */
    static deregisterExtension(id) {
        id = id.toLocaleLowerCase();
        if (registeredExtensions.delete(id)) {
            extensionDeregistered.dispatch(id);
        }
    }
    /**
     * An array of all registered extensions.
     */
    static get extensions() {
        return [...registeredExtensions.keys()];
    }
    /**
     * An array of currently loaded extension ids
     */
    get extensions() {
        return [...this._extensions.keys()];
    }
    /**
     * Shortcut for `MessageBot.dependencies.fetch`
     */
    get fetch() {
        return MessageBot$1.dependencies.fetch;
    }
    /**
     * Gets the exports of an extension, returns undefined if the extension is not loaded.
     * @param id the extension id to get exports from
     */
    getExports(id) {
        let ex = this._extensions.get(id.toLocaleLowerCase());
        if (ex)
            return ex.exports;
    }
    /**
     * Adds an extension to this bot. Calls the init function supplied when registering the extension.
     * @param id the id of the registered extension to add.
     */
    addExtension(id) {
        id = id.toLocaleLowerCase();
        if (this._extensions.has(id))
            throw new Error(`The ${id} extension has already been added.`);
        let creator = registeredExtensions.get(id);
        if (!creator)
            throw new Error(`The ${id} extension has not been registered.`);
        let ex = new MessageBotExtension(id, this);
        this._extensions.set(id, ex);
        creator.call(ex, ex, this.world);
    }
    /**
     * Removes a currently loaded extension. Should not be used by published extensions unless
     * the extension is an extension manager.
     * @param id the id of the extension to remove
     * @param uninstall whether or not the extension should be completely removed, or just unloaded.
     */
    removeExtension(id, uninstall) {
        id = id.toLocaleLowerCase();
        let ex = this._extensions.get(id);
        if (!ex)
            throw new Error(`The ${id} extension is not registered.`);
        try {
            if (uninstall) {
                ex.uninstall();
            }
            else {
                ex.remove();
            }
        }
        finally {
            this._extensions.delete(id);
        }
    }
    /**
     * Sends a message to the world for this bot, should usually be used in place of world.send.
     *
     * @param message the message to send
     * @param params any variables to inject into the message. If `name` is provided, it will be available through {{NAME}}, {{Name}} and {{name}}
     */
    send(message, _a = {}) {
        var params = __rest$1(_a, []);
        // Common enough to be done here, set the name of the player up right.
        if (params.name && params.name.length) {
            let name = params.name.toLocaleLowerCase();
            params = Object.assign({}, params, { name, Name: name[0].toLocaleUpperCase() + name.substr(1), NAME: name.toLocaleUpperCase() });
        }
        let safeKeyRegex = Object.keys(params)
            .map(key => key.replace(/([.+?^=!:${}()|\[\]\/\\])/g, '\\$1'))
            .join('}}|{{');
        // Don't bother replacing if nothing to search for
        if (safeKeyRegex.length) {
            message = message.replace(new RegExp(`{{${safeKeyRegex}}}`, 'g'), (key) => {
                return params[key.substring(2, key.length - 2)];
            });
        }
        this.world.send(message).catch(() => { });
    }
}
/**
 * An event that fires whenever an extension is registered or re-registered.
 */
MessageBot$1.extensionRegistered = extensionRegistered.asEvent();
/**
 * An event that fires when an extension is deregistered, if it has been registered. Will not fire when an extension is re-registered.
 */
MessageBot$1.extensionDeregistered = extensionDeregistered.asEvent();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUF3QixNQUFNLGFBQWEsQ0FBQTtBQUN2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFBO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDakMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUduQyxPQUFPLEVBQUUsV0FBVyxFQUFtQixNQUFNLFVBQVUsQ0FBQTtBQUV2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQVksV0FBVyxFQUFtQixDQUFBO0FBRTlGLElBQUksb0JBQW9CLEdBQUcsSUFBSSxHQUFHLEVBQWdDLENBQUE7QUFDbEUsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLFdBQVcsRUFBVSxDQUFBO0FBQ25ELElBQUkscUJBQXFCLEdBQUcsSUFBSSxXQUFXLEVBQVUsQ0FBQTtBQUVyRCxNQUFNO0lBNERGOzs7O09BSUc7SUFDSCxZQUFtQixPQUFnQixFQUFFLElBQWU7UUFBakMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVZuQzs7V0FFRztRQUNLLGdCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQStCLENBQUE7UUFReEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFBO1FBRXJHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUMxRSxDQUFDO0lBakREOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQVUsRUFB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Q0FBQyxDQUFDLENBQUE7WUFDbkQsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7O0FBeEpEOztHQUVHO0FBQ0ksOEJBQW1CLEdBQTRCLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFBO0FBRW5GOztHQUVHO0FBQ0ksZ0NBQXFCLEdBQTRCLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZUJvdEV4dGVuc2lvbiwgRXh0ZW5zaW9uSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2V4dGVuc2lvbidcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuL3dvcmxkJ1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcidcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSdcclxuXHJcbmltcG9ydCB7IFdvcmxkQXBpLCBXb3JsZEluZm8gfSBmcm9tICdibG9ja2hlYWRzLWFwaS9hcGknXHJcbmltcG9ydCB7IFNpbXBsZUV2ZW50LCBTYWZlU2ltcGxlRXZlbnQgfSBmcm9tICcuL2V2ZW50cydcclxuXHJcbmV4cG9ydCB7IE1lc3NhZ2VCb3RFeHRlbnNpb24sIFdvcmxkLCBQbGF5ZXIsIFN0b3JhZ2UsIFdvcmxkQXBpLCBTaW1wbGVFdmVudCwgU2FmZVNpbXBsZUV2ZW50IH1cclxuXHJcbmxldCByZWdpc3RlcmVkRXh0ZW5zaW9ucyA9IG5ldyBNYXA8c3RyaW5nLCBFeHRlbnNpb25Jbml0aWFsaXplcj4oKVxyXG5sZXQgZXh0ZW5zaW9uUmVnaXN0ZXJlZCA9IG5ldyBTaW1wbGVFdmVudDxzdHJpbmc+KClcclxubGV0IGV4dGVuc2lvbkRlcmVnaXN0ZXJlZCA9IG5ldyBTaW1wbGVFdmVudDxzdHJpbmc+KClcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQm90IHtcclxuICAgIC8qKlxyXG4gICAgICogRXh0ZXJuYWwgZGVwZW5kZW5jaWVzIHRoYXQgbXVzdCBiZSBzZXQgYmVmb3JlIGNyZWF0aW5nIGFueSBpbnN0YW5jZXMgb2YgdGhpcyBjbGFzcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlcGVuZGVuY2llczoge1xyXG4gICAgICAgIEFwaTogbmV3IChpbmZvOiBXb3JsZEluZm8pID0+IFdvcmxkQXBpLFxyXG4gICAgICAgIGdldFdvcmxkczogKCkgPT4gUHJvbWlzZTxXb3JsZEluZm9bXT4sXHJcbiAgICAgICAgZmV0Y2g6IHR5cGVvZiBmZXRjaFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gZXZlbnQgdGhhdCBmaXJlcyB3aGVuZXZlciBhbiBleHRlbnNpb24gaXMgcmVnaXN0ZXJlZCBvciByZS1yZWdpc3RlcmVkLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZXh0ZW5zaW9uUmVnaXN0ZXJlZDogU2FmZVNpbXBsZUV2ZW50PHN0cmluZz4gPSBleHRlbnNpb25SZWdpc3RlcmVkLmFzRXZlbnQoKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gZXZlbnQgdGhhdCBmaXJlcyB3aGVuIGFuIGV4dGVuc2lvbiBpcyBkZXJlZ2lzdGVyZWQsIGlmIGl0IGhhcyBiZWVuIHJlZ2lzdGVyZWQuIFdpbGwgbm90IGZpcmUgd2hlbiBhbiBleHRlbnNpb24gaXMgcmUtcmVnaXN0ZXJlZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGV4dGVuc2lvbkRlcmVnaXN0ZXJlZDogU2FmZVNpbXBsZUV2ZW50PHN0cmluZz4gPSBleHRlbnNpb25EZXJlZ2lzdGVyZWQuYXNFdmVudCgpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYW4gZXh0ZW5zaW9uIHRoYXQgY2FuIGJlIGxvYWRlZCBieSBpbnN0YW5jZXMgb2YgdGhlIGJvdC5cclxuICAgICAqIE5vdGU6IElmIGFuIGV4dGVuc2lvbiBoYXMgYWxyZWFkeSBiZWVuIGxvYWRlZCBmcm9tIGEgcHJldmlvdXNseSByZWdpc3RlcmVkIGluaXRpYWxpemVyLCBpdCB3aWxsIG5vdCBiZSBvdmVyd3JpdHRlbi5cclxuICAgICAqIEBwYXJhbSBpZCB0aGUgZXh0ZW5zaW9uIElELCB3aWxsIGJlIG5vcm1hbGl6ZWQgdG8gbG93ZXIgY2FzZS5cclxuICAgICAqIEBwYXJhbSBpbml0aWFsaXplciB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHRvIHNldCB1cCB0aGUgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXJFeHRlbnNpb24oaWQ6IHN0cmluZywgaW5pdGlhbGl6ZXI6IEV4dGVuc2lvbkluaXRpYWxpemVyKSB7XHJcbiAgICAgICAgaWQgPSBpZC50b0xvY2FsZUxvd2VyQ2FzZSgpXHJcbiAgICAgICAgcmVnaXN0ZXJlZEV4dGVuc2lvbnMuc2V0KGlkLCBpbml0aWFsaXplcilcclxuICAgICAgICBleHRlbnNpb25SZWdpc3RlcmVkLmRpc3BhdGNoKGlkKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBleHRlbnNpb24gaW5pdGlhbGl6ZXIgZnJvbSB0aGUgcmVnaXN0cnksIGNhbiBiZSB1c2VkIHRvIHByZXZlbnQgYW4gZXh0ZW5zaW9uIGZyb20gYmVpbmcgbG9hZGVkIGluIG11bHRpcGxlIGJvdHMgYXQgb25jZSAoZ2VuZXJhbGx5IGEgYmFkIGlkZWEpLlxyXG4gICAgICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgZXh0ZW5zaW9uIHRvIGRlcmVnaXN0ZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlcmVnaXN0ZXJFeHRlbnNpb24oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlkID0gaWQudG9Mb2NhbGVMb3dlckNhc2UoKVxyXG4gICAgICAgIGlmIChyZWdpc3RlcmVkRXh0ZW5zaW9ucy5kZWxldGUoaWQpKSB7XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbkRlcmVnaXN0ZXJlZC5kaXNwYXRjaChpZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBhbGwgcmVnaXN0ZXJlZCBleHRlbnNpb25zLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IGV4dGVuc2lvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5yZWdpc3RlcmVkRXh0ZW5zaW9ucy5rZXlzKCldXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgd29ybGQgdGhhdCB0aGUgYm90IGlzIGxvYWRlZCBvbi5cclxuICAgICAqL1xyXG4gICAgd29ybGQ6IFdvcmxkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGwgbG9hZGVkIGV4dGVuc2lvbiBpbnN0YW5jZXMgZm9yIHRoaXMgYm90LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zID0gbmV3IE1hcDxzdHJpbmcsIE1lc3NhZ2VCb3RFeHRlbnNpb24+KClcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3RvcmFnZSBUaGUgc3RvcmFnZSBpbnN0YW5jZSB0byBiZSB1c2VkIGJ5IHRoZSBib3QuXHJcbiAgICAgKiBAcGFyYW0gaW5mbyBUaGUgd29ybGQgaW5mbyB0aGF0IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBBUEkgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgd29ybGQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlLCBpbmZvOiBXb3JsZEluZm8pIHtcclxuICAgICAgICBpZiAoIU1lc3NhZ2VCb3QuZGVwZW5kZW5jaWVzKSB0aHJvdyBuZXcgRXJyb3IoJ0RlcGVuZGVuY2llcyBtdXN0IGJlIHNldCBiZWZvcmUgY3JlYXRpbmcgdGhpcyBjbGFzcy4nKVxyXG5cclxuICAgICAgICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKG5ldyBNZXNzYWdlQm90LmRlcGVuZGVuY2llcy5BcGkoaW5mbyksIHN0b3JhZ2UpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBjdXJyZW50bHkgbG9hZGVkIGV4dGVuc2lvbiBpZHNcclxuICAgICAqL1xyXG4gICAgZ2V0IGV4dGVuc2lvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl9leHRlbnNpb25zLmtleXMoKV1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3J0Y3V0IGZvciBgTWVzc2FnZUJvdC5kZXBlbmRlbmNpZXMuZmV0Y2hgXHJcbiAgICAgKi9cclxuICAgIGdldCBmZXRjaCgpIHtcclxuICAgICAgICByZXR1cm4gTWVzc2FnZUJvdC5kZXBlbmRlbmNpZXMuZmV0Y2hcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGV4cG9ydHMgb2YgYW4gZXh0ZW5zaW9uLCByZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGUgZXh0ZW5zaW9uIGlzIG5vdCBsb2FkZWQuXHJcbiAgICAgKiBAcGFyYW0gaWQgdGhlIGV4dGVuc2lvbiBpZCB0byBnZXQgZXhwb3J0cyBmcm9tXHJcbiAgICAgKi9cclxuICAgIGdldEV4cG9ydHMoaWQ6IHN0cmluZyk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBsZXQgZXggPSB0aGlzLl9leHRlbnNpb25zLmdldChpZC50b0xvY2FsZUxvd2VyQ2FzZSgpKVxyXG4gICAgICAgIGlmIChleCkgcmV0dXJuIGV4LmV4cG9ydHNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYW4gZXh0ZW5zaW9uIHRvIHRoaXMgYm90LiBDYWxscyB0aGUgaW5pdCBmdW5jdGlvbiBzdXBwbGllZCB3aGVuIHJlZ2lzdGVyaW5nIHRoZSBleHRlbnNpb24uXHJcbiAgICAgKiBAcGFyYW0gaWQgdGhlIGlkIG9mIHRoZSByZWdpc3RlcmVkIGV4dGVuc2lvbiB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIGFkZEV4dGVuc2lvbihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWQgPSBpZC50b0xvY2FsZUxvd2VyQ2FzZSgpXHJcbiAgICAgICAgaWYgKHRoaXMuX2V4dGVuc2lvbnMuaGFzKGlkKSkgdGhyb3cgbmV3IEVycm9yKGBUaGUgJHtpZH0gZXh0ZW5zaW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQuYClcclxuXHJcbiAgICAgICAgbGV0IGNyZWF0b3IgPSByZWdpc3RlcmVkRXh0ZW5zaW9ucy5nZXQoaWQpXHJcbiAgICAgICAgaWYgKCFjcmVhdG9yKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSAke2lkfSBleHRlbnNpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuYClcclxuXHJcbiAgICAgICAgbGV0IGV4ID0gbmV3IE1lc3NhZ2VCb3RFeHRlbnNpb24oaWQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucy5zZXQoaWQsIGV4KVxyXG4gICAgICAgIGNyZWF0b3IuY2FsbChleCwgZXgsIHRoaXMud29ybGQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGEgY3VycmVudGx5IGxvYWRlZCBleHRlbnNpb24uIFNob3VsZCBub3QgYmUgdXNlZCBieSBwdWJsaXNoZWQgZXh0ZW5zaW9ucyB1bmxlc3NcclxuICAgICAqIHRoZSBleHRlbnNpb24gaXMgYW4gZXh0ZW5zaW9uIG1hbmFnZXIuXHJcbiAgICAgKiBAcGFyYW0gaWQgdGhlIGlkIG9mIHRoZSBleHRlbnNpb24gdG8gcmVtb3ZlXHJcbiAgICAgKiBAcGFyYW0gdW5pbnN0YWxsIHdoZXRoZXIgb3Igbm90IHRoZSBleHRlbnNpb24gc2hvdWxkIGJlIGNvbXBsZXRlbHkgcmVtb3ZlZCwgb3IganVzdCB1bmxvYWRlZC5cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlRXh0ZW5zaW9uKGlkOiBzdHJpbmcsIHVuaW5zdGFsbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlkID0gaWQudG9Mb2NhbGVMb3dlckNhc2UoKVxyXG4gICAgICAgIGxldCBleCA9IHRoaXMuX2V4dGVuc2lvbnMuZ2V0KGlkKVxyXG4gICAgICAgIGlmICghZXgpIHRocm93IG5ldyBFcnJvcihgVGhlICR7aWR9IGV4dGVuc2lvbiBpcyBub3QgcmVnaXN0ZXJlZC5gKVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodW5pbnN0YWxsKSB7XHJcbiAgICAgICAgICAgICAgICBleC51bmluc3RhbGwoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXgucmVtb3ZlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dGVuc2lvbnMuZGVsZXRlKGlkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgd29ybGQgZm9yIHRoaXMgYm90LCBzaG91bGQgdXN1YWxseSBiZSB1c2VkIGluIHBsYWNlIG9mIHdvcmxkLnNlbmQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gc2VuZFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBhbnkgdmFyaWFibGVzIHRvIGluamVjdCBpbnRvIHRoZSBtZXNzYWdlLiBJZiBgbmFtZWAgaXMgcHJvdmlkZWQsIGl0IHdpbGwgYmUgYXZhaWxhYmxlIHRocm91Z2gge3tOQU1FfX0sIHt7TmFtZX19IGFuZCB7e25hbWV9fVxyXG4gICAgICovXHJcbiAgICBzZW5kKG1lc3NhZ2U6IHN0cmluZywgey4uLnBhcmFtc306IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge30pIHtcclxuICAgICAgICAvLyBDb21tb24gZW5vdWdoIHRvIGJlIGRvbmUgaGVyZSwgc2V0IHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXIgdXAgcmlnaHQuXHJcbiAgICAgICAgaWYgKHBhcmFtcy5uYW1lICYmIHBhcmFtcy5uYW1lLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IHBhcmFtcy5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIE5hbWU6IG5hbWVbMF0udG9Mb2NhbGVVcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpLFxyXG4gICAgICAgICAgICAgICAgTkFNRTogbmFtZS50b0xvY2FsZVVwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzYWZlS2V5UmVnZXggPSBPYmplY3Qua2V5cyhwYXJhbXMpXHJcbiAgICAgICAgICAgIC5tYXAoa2V5ID0+IGtleS5yZXBsYWNlKC8oWy4rP149IToke30oKXxcXFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpKVxyXG4gICAgICAgICAgICAuam9pbignfX18e3snKVxyXG5cclxuICAgICAgICAvLyBEb24ndCBib3RoZXIgcmVwbGFjaW5nIGlmIG5vdGhpbmcgdG8gc2VhcmNoIGZvclxyXG4gICAgICAgIGlmIChzYWZlS2V5UmVnZXgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UobmV3IFJlZ0V4cChge3ske3NhZmVLZXlSZWdleH19fWAsICdnJyksIChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtc1trZXkuc3Vic3RyaW5nKDIsIGtleS5sZW5ndGggLSAyKV1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud29ybGQuc2VuZChtZXNzYWdlKS5jYXRjaCgoKSA9PiB7fSlcclxuICAgIH1cclxufSJdfQ==

class MessageBot$$1 extends MessageBot$1 {
    send(message, _a = {}, user = false) {
        var params = __rest(_a, []);
        // Send should not do anything in the browser unless it is the user sending chat
        if (!user)
            return;
        super.send(message, params);
    }
}

const jsonHeaders = new Headers([['Content-Type', 'application/json']]);
class Api {
    constructor() { }
    getLists() {
        return fetch('/lists')
            .then(r => r.json());
    }
    setLists(lists) {
        return fetch('/lists', { method: 'POST', headers: jsonHeaders, body: JSON.stringify(lists) })
            .then(() => { });
    }
    getOverview() {
        return fetch('/overview')
            .then(r => r.json())
            .then((overview) => {
            overview.created = new Date(overview.created);
            overview.credit_until = new Date(overview.credit_until);
            overview.last_activity = new Date(overview.last_activity);
            return overview;
        });
    }
    getLogs() {
        return fetch('/logs')
            .then(r => r.json())
            .then((lines) => {
            lines.forEach(line => line.timestamp = new Date(line.timestamp));
            return lines;
        });
    }
    send(message) {
        return fetch('/send', { method: 'POST', headers: jsonHeaders, body: JSON.stringify({ message }) })
            .then(() => { });
    }
    getMessages(lastId) {
        return fetch('/messages', { method: 'POST', headers: jsonHeaders, body: JSON.stringify({ lastId }) })
            .then(r => r.json());
    }
    start() {
        return fetch('/start')
            .then(() => { });
    }
    stop() {
        return fetch('/stop')
            .then(() => { });
    }
    restart() {
        return fetch('/restart')
            .then(() => { });
    }
}
function getWorlds() {
    return fetch('/worlds')
        .then(r => r.json());
}

const headers = new Headers({ 'Content-Type': 'application/json' });
const blacklist = ['/mb_players'];
function onChange() {
    let storage = Object.assign({}, localStorage);
    for (let key in storage) {
        if (blacklist.includes(key)) {
            delete storage[key];
        }
    }
    fetch('/storage', {
        method: 'POST',
        headers,
        body: JSON.stringify(storage)
    });
}
function load() {
    return __awaiter(this, void 0, void 0, function* () {
        localStorage.clear();
        let storage = yield fetch('/storage').then(r => r.json());
        Object.keys(storage).forEach(key => {
            localStorage.setItem(`/${key}`, storage[key]);
        });
    });
}
class Storage$1 extends Storage {
    constructor(head) {
        super();
        this.head = head;
        // For readability
        this.head += '/';
    }
    get(key, fallback) {
        // JSON.parse correctly handles null so it's fine to declare this as string.
        let item = localStorage.getItem(this.head + key);
        try {
            let parsed = JSON.parse(item);
            return parsed == null ? fallback : parsed;
        }
        catch (_a) {
            return fallback;
        }
    }
    set(key, value) {
        localStorage.setItem(this.head + key, JSON.stringify(value));
        onChange();
    }
    clear(prefix = '') {
        this.keys(prefix)
            .forEach(key => localStorage.removeItem(this.head + key));
        onChange();
    }
    keys(prefix = '') {
        return Object.keys(localStorage)
            .filter(key => key.startsWith(this.head + prefix))
            .map(key => key.substr(this.head.length));
    }
    prefix(prefix) {
        return new Storage$1(this.head + prefix);
    }
}

var page = "<header class=\"header is-fixed-top\">\r\n    <nav class=\"navbar is-primary\" role=\"navigation\" aria-label=\"main navigation\">\r\n        <div class=\"navbar-brand\">\r\n            <div class=\"navbar-item nav-slider-toggle\">\r\n                <img src=\"https://gitcdn.xyz/cdn/Blockheads-Messagebot/UI/master/logo.png\">\r\n            </div>\r\n            <a class=\"navbar-item nav-slider-toggle\">Menu</a>\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n<div class=\"nav-slider-container\">\r\n    <nav class=\"nav-slider\"></nav>\r\n    <div class=\"is-overlay nav-slider-toggle\"></div>\r\n</div>\r\n\r\n<div id=\"container\" class=\"has-fixed-nav\"></div>\r\n\r\n\r\n<div id=\"modal\" class=\"modal\">\r\n    <div class=\"modal-background\"></div>\r\n    <div class=\"modal-card\">\r\n        <header class=\"modal-card-head\"></header>\r\n        <section class=\"modal-card-body\"></section>\r\n        <footer class=\"modal-card-foot\"></footer>\r\n    </div>\r\n</div>\r\n";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */



















function __values$1(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read$1(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread$1() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read$1(arguments[i]));
    return ar;
}

var api = function () {
    var menuSlider = document.querySelector('.nav-slider-container .nav-slider');
    var toggleMenu = function () { return menuSlider.classList.toggle('is-active'); };
    try {
        for (var _a = __values$1(document.querySelectorAll('.nav-slider-toggle')), _b = _a.next(); !_b.done; _b = _a.next()) {
            var el = _b.value;
            el.addEventListener('click', toggleMenu);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var tabs = new Map();
    var groups = new Map();
    var container = document.getElementById('container');
    var menuContainer = document.querySelector('.nav-slider');
    menuContainer.addEventListener('click', function (event) {
        var nav = event.target;
        var tab = tabs.get(nav);
        if (tab) {
            // Containers
            Array.from(container.children).forEach(function (child) { return child.classList.remove('visible'); });
            tab.classList.add('visible');
            // Nav items
            Array.from(menuContainer.querySelectorAll('span.nav-item')).forEach(function (span) { return span.classList.remove('is-active'); });
            nav.classList.add('is-active');
        }
    });
    var addTab = function (text, groupName) {
        var div = container.appendChild(document.createElement('div'));
        var parent = menuContainer;
        if (groupName)
            parent = groups.get(groupName);
        var nav = parent.appendChild(document.createElement('span'));
        nav.textContent = text;
        nav.classList.add('nav-item');
        tabs.set(nav, div);
        return div;
    };
    var removeTab = function (content) {
        try {
            for (var _a = __values$1(tabs.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var _c = __read$1(_b.value, 2), nav = _c[0], div = _c[1];
                if (div == content) {
                    div.remove();
                    nav.remove();
                    tabs.delete(nav);
                    return;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var e_2, _d;
    };
    var addTabGroup = function (text, groupName, parent) {
        var details = groups.get(groupName);
        if (details) {
            details.children[0].textContent = text;
            return;
        }
        var parentElement = menuContainer;
        if (parent)
            parentElement = groups.get(parent);
        details = parentElement.appendChild(document.createElement('details'));
        details.classList.add('nav-item');
        var summary = details.appendChild(document.createElement('summary'));
        summary.textContent = text;
        groups.set(groupName, details);
    };
    var removeTabGroup = function (groupName) {
        var group = groups.get(groupName);
        if (!group)
            return;
        try {
            for (var _a = __values$1(group.querySelectorAll('span')), _b = _a.next(); !_b.done; _b = _a.next()) {
                var child = _b.value;
                // Unless someone has been purposely messing with the page, this is a safe assertion
                removeTab(tabs.get(child));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        groups.delete(groupName);
        group.remove();
        var e_3, _c;
    };
    var handleRule = function (rule, element) {
        if (typeof rule.text == 'string') {
            element.textContent = rule.text;
        }
        else if (typeof rule.html == 'string') {
            element.innerHTML = rule.html;
        }
        var blacklist = ['text', 'html', 'selector'];
        if (element instanceof HTMLTextAreaElement && 'value' in rule) {
            element.textContent = rule.value;
            blacklist.push('value');
        }
        //See https://github.com/Blockheads-Messagebot/MessageBot/issues/52
        if (element instanceof HTMLSelectElement && 'value' in rule) {
            var child = element.querySelector("[value=\"" + rule.value + "\"]");
            if (child)
                child.selected = true;
        }
        Object.keys(rule)
            .filter(function (key) { return !blacklist.includes(key); })
            .forEach(function (key) { return element.setAttribute(key, rule[key]); });
    };
    var buildTemplate = function (template, target, rules) {
        if (typeof template == 'string')
            template = document.querySelector(template);
        if (typeof target == 'string')
            target = document.querySelector(target);
        var parent = document.importNode(template.content, true);
        try {
            for (var rules_1 = __values$1(rules), rules_1_1 = rules_1.next(); !rules_1_1.done; rules_1_1 = rules_1.next()) {
                var rule = rules_1_1.value;
                var element = parent.querySelector(rule.selector);
                if (!element) {
                    console.warn("Could not find " + rule.selector, rule);
                    continue;
                }
                handleRule(rule, element);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (rules_1_1 && !rules_1_1.done && (_a = rules_1.return)) _a.call(rules_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        target.appendChild(parent);
        var e_4, _a;
    };
    var notify = function (text, displayTime) {
        if (displayTime === void 0) { displayTime = 3; }
        var el = document.body.appendChild(document.createElement('div'));
        el.classList.add('bot-notification', 'is-active');
        el.textContent = text;
        var timeouts = [
            setTimeout(function () { return el.classList.remove('is-active'); }, displayTime * 1000),
            setTimeout(function () { return el.remove(); }, (displayTime + 1) * 1000)
        ];
        el.addEventListener('click', function () {
            timeouts.forEach(clearTimeout);
            el.remove();
        });
    };
    var alertInstance = {
        active: false,
        queue: []
    };
    var modal = document.getElementById('modal');
    var modalBody = modal.querySelector('.modal-card-body');
    var modalFooter = modal.querySelector('.modal-card-foot');
    var addButton = function (button) {
        var el = modalFooter.appendChild(document.createElement('a'));
        var styles = ['button'];
        if (typeof button == 'object') {
            if (button.style)
                styles.push(button.style);
            el.textContent = button.text;
        }
        else {
            el.textContent = button;
        }
        (_a = el.classList).add.apply(_a, __spread$1(styles));
        var _a;
    };
    var showAlert = function () {
        alertInstance.active = true;
        var _a = alertInstance.queue.shift(), html = _a.html, buttons = _a.buttons, callback = _a.callback;
        modalBody.innerHTML = html;
        Array.isArray(buttons) ? buttons.forEach(addButton) : addButton('OK');
        modal.classList.add('is-active');
        modalFooter.addEventListener('click', function buttonHandler(event) {
            var target = event.target;
            if (target.tagName != 'A')
                return;
            modal.classList.remove('is-active');
            try {
                if (callback)
                    callback.call(null, target.textContent);
            }
            catch (err) {
                console.error('Error calling alert callback', err);
            }
            modalFooter.innerHTML = '';
            modalFooter.removeEventListener('click', buttonHandler);
            alertInstance.active = false;
            if (alertInstance.queue.length)
                showAlert();
        });
    };
    var alert = function (html, buttons, callback) {
        alertInstance.queue.push({ html: html, buttons: buttons, callback: callback });
        if (!alertInstance.active)
            showAlert();
    };
    var prompt = function (text, callback) {
        var p = document.createElement('p');
        p.textContent = text;
        alert(p.outerHTML + "<textarea class=\"textarea\"></textarea>", ['OK', 'Cancel'], function () {
            var el = modalBody.querySelector('textarea');
            if (callback)
                callback(el.value || '');
        });
    };
    return {
        toggleMenu: toggleMenu,
        addTab: addTab,
        removeTab: removeTab,
        addTabGroup: addTabGroup,
        removeTabGroup: removeTabGroup,
        buildTemplate: buildTemplate,
        notify: notify,
        alert: alert,
        prompt: prompt
    };
    var e_1, _c;
};

function polyfill() {
    if (!('open' in document.createElement('details'))) {
        var style = document.createElement('style');
        style.textContent += "details:not([open]) > :not(summary) { display: none !important } details > summary:before { content: \"\u25B6\" display: inline-block font-size: .8em width: 1.5em font-family:\"Courier New\" } details[open] > summary:before { transform: rotate(90deg) }";
        document.head.appendChild(style);
        window.addEventListener('click', function (event) {
            var target = event.target;
            if (target.tagName == 'SUMMARY') {
                var details = target.parentNode;
                if (!details) {
                    return;
                }
                if (details.getAttribute('open')) {
                    details.open = false;
                    details.removeAttribute('open');
                }
                else {
                    details.open = true;
                    details.setAttribute('open', 'open');
                }
            }
        });
    }
}

MessageBot$1.registerExtension('ui', function (ex) {
    if (typeof document == 'undefined') {
        throw new Error('This extension cannot be loaded outside of a browser environment.');
    }
    ex.uninstall = function () {
        throw new Error('The UI extension cannot be removed once loaded');
    };
    // Page creation
    document.body.innerHTML = page;
    document.head.querySelectorAll('link').forEach(function (el) { return el.remove(); });
    var style = document.head.appendChild(document.createElement('link'));
    style.rel = 'stylesheet';
    style.href = 'https://gitcdn.xyz/cdn/Blockheads-Messagebot/UI/master/index.css';
    polyfill();
    // Expose api
    ex.exports = api();
});

function checkJoins(player, message) {
    return player.joins >= message.joins_low && player.joins <= message.joins_high;
}
function checkGroups(player, message) {
    return isInGroup(player, message.group) && !isInGroup(player, message.not_group);
}
function isInGroup(player, group) {
    switch (group) {
        case 'all':
            return true;
        case 'staff':
            return player.isStaff;
        case 'mod':
            return player.isMod;
        case 'admin':
            return player.isAdmin;
        case 'owner':
            return player.isOwner;
        default:
            return false;
    }
}

class RemovableMessageHelper {
    constructor(id, ex) {
        this.id = id;
        this.ex = ex;
    }
    get messages() {
        return this.ex.storage.get(this.id, []);
    }
}
class JoinListener extends RemovableMessageHelper {
    constructor(ex) {
        super('joinArr', ex);
        this.listener = (player) => {
            for (let msg of this.messages) {
                if (checkJoins(player, msg) && checkGroups(player, msg)) {
                    this.ex.bot.send(msg.message, { name: player.name });
                }
            }
        };
        this.ex.world.onJoin.sub(this.listener);
    }
    remove() {
        this.ex.world.onJoin.unsub(this.listener);
    }
}
class LeaveListener extends RemovableMessageHelper {
    constructor(ex) {
        super('leaveArr', ex);
        this.listener = (player) => {
            for (let msg of this.messages) {
                if (checkJoins(player, msg) && checkGroups(player, msg)) {
                    this.ex.bot.send(msg.message, { name: player.name });
                }
            }
        };
        this.ex.world.onLeave.sub(this.listener);
    }
    remove() {
        this.ex.world.onLeave.unsub(this.listener);
    }
}
class TriggerListener extends RemovableMessageHelper {
    constructor(ex) {
        super('triggerArr', ex);
        this.listener = ({ player, message }) => {
            if (player.name == 'SERVER')
                return;
            let responses = 0;
            for (let msg of this.messages) {
                let checks = [
                    checkJoins(player, msg),
                    checkGroups(player, msg),
                    this.triggerMatches(message, msg.trigger)
                ];
                if (checks.every(Boolean) && ++responses <= this.ex.storage.get('maxResponses', 3)) {
                    this.ex.bot.send(msg.message, { name: player.name });
                }
            }
        };
        this.ex.world.onMessage.sub(this.listener);
    }
    remove() {
        this.ex.world.onMessage.unsub(this.listener);
    }
    triggerMatches(message, trigger) {
        if (!this.ex.storage.get('disableWhitespaceTrimming', false)) {
            trigger = trigger.trim();
        }
        if (this.ex.storage.get('regexTriggers', false)) {
            try {
                return new RegExp(trigger, 'i').test(message);
            }
            catch (_a) {
                return false;
            }
        }
        trigger = trigger.replace(/([.+?^=!:${}()|\[\]\/\\])/g, "\\$1").replace(/\*/g, ".*");
        return new RegExp(trigger, 'i').test(message);
    }
}
class AnnouncementListener extends RemovableMessageHelper {
    constructor(ex) {
        super('announcementArr', ex);
        this.index = 0;
        this.run = () => {
            if (this.index >= this.messages.length)
                this.index = 0;
            if (this.messages[this.index])
                this.ex.bot.send(this.messages[this.index++].message);
            this.timeoutId = setTimeout(this.run, this.delay);
        };
        this.timeoutId = setTimeout(this.run, this.delay);
    }
    get delay() {
        return this.ex.storage.get('announcementDelay', 10) * 60000;
    }
    remove() {
        clearTimeout(this.timeoutId);
    }
}

var joinHtml = "<template>\r\n    <div class=\"column is-4-desktop is-6-tablet\">\r\n        <div class=\"box\">\r\n            <label> Message: <textarea data-target=\"message\" class=\"textarea is-fluid m\"></textarea></label>\r\n            <details>\r\n                <summary>More options <small class=\"summary\"></small></summary>\r\n                <label>Player is: <select data-target=\"group\">\r\n                    <option value=\"all\">anyone</option>\r\n                    <option value=\"staff\">a staff member</option>\r\n                    <option value=\"mod\">a mod</option>\r\n                    <option value=\"admin\">an admin</option>\r\n                    <option value=\"owner\">the owner</option>\r\n                </select></label>\r\n                <br>\r\n                <label>Player is not: <select data-target=\"not_group\">\r\n                    <option value=\"nobody\">nobody</option>\r\n                    <option value=\"staff\">a staff member</option>\r\n                    <option value=\"mod\">a mod</option>\r\n                    <option value=\"admin\">an admin</option>\r\n                    <option value=\"owner\">the owner</option>\r\n                </select></label>\r\n                <br>\r\n                <input type=\"number\" value=\"0\" data-target=\"joins_low\">\r\n                <span> &le; player joins &le; </span>\r\n                <input type=\"number\" value=\"9999\" data-target=\"joins_high\">\r\n            </details>\r\n            <a>Delete</a>\r\n        </div>\r\n    </div>\r\n</template>\r\n<div class=\"container is-fluid\">\r\n    <section class=\"section is-small\">\r\n        <span class=\"button is-primary is-pulled-right\">+</span>\r\n        <h3 class=\"title is-4\">These are checked when a player joins the server.</h3>\r\n        <span>You can use {{Name}}, {{NAME}}, {{name}}, and {{ip}} in your message.</span>\r\n    </section>\r\n    <div class=\"columns is-multiline messages-container\" style=\"border-top: 1px solid #000\"></div>\r\n</div>";

var leaveHtml = "<template>\r\n    <div class=\"column is-4-desktop is-6-tablet\">\r\n        <div class=\"box\">\r\n            <label>Message\r\n                <textarea class=\"textarea is-fluid\" data-target=\"message\"></textarea>\r\n            </label>\r\n            <details>\r\n                <summary>More options\r\n                    <small class=\"summary\"></small>\r\n                </summary>\r\n                <label>Player is:\r\n                    <select data-target=\"group\">\r\n                        <option value=\"all\">anyone</option>\r\n                        <option value=\"staff\">a staff member</option>\r\n                        <option value=\"mod\">a mod</option>\r\n                        <option value=\"admin\">an admin</option>\r\n                        <option value=\"owner\">the owner</option>\r\n                    </select>\r\n                </label>\r\n                <br>\r\n                <label>Player is not:\r\n                    <select data-target=\"not_group\">\r\n                        <option value=\"nobody\">nobody</option>\r\n                        <option value=\"staff\">a staff member</option>\r\n                        <option value=\"mod\">a mod</option>\r\n                        <option value=\"admin\">an admin</option>\r\n                        <option value=\"owner\">the owner</option>\r\n                    </select>\r\n                </label>\r\n                <br>\r\n                <input type=\"number\" value=\"0\" data-target=\"joins_low\">\r\n                <span> &le; player joins &le; </span>\r\n                <input type=\"number\" value=\"9999\" data-target=\"joins_high\">\r\n            </details>\r\n            <a>Delete</a>\r\n        </div>\r\n    </div>\r\n</template>\r\n<div class=\"container is-fluid\">\r\n    <section class=\"section is-small\">\r\n        <span class=\"button is-primary is-pulled-right\">+</span>\r\n        <h3 class=\"title is-4\">These are checked when a player leaves the server.</h3>\r\n        <span>You can use {{Name}}, {{NAME}}, {{name}}, and {{ip}} in your message.</span>\r\n    </section>\r\n    <div class=\"columns is-multiline messages-container\" style=\"border-top: 1px solid #000\"></div>\r\n</div>";

var triggerHtml = "<template>\r\n    <div class=\"column is-4-desktop is-6-tablet\">\r\n        <div class=\"box\">\r\n            <label>Trigger:\r\n                <input class=\"input\" data-target=\"trigger\">\r\n            </label>\r\n            <label>Message:\r\n                <textarea class=\"textarea is-fluid\" data-target=\"message\"></textarea>\r\n            </label>\r\n            <details>\r\n                <summary>More options\r\n                    <small class=\"summary\"></small>\r\n                </summary>\r\n                <label>Player is:\r\n                    <select data-target=\"group\">\r\n                        <option value=\"all\">anyone</option>\r\n                        <option value=\"staff\">a staff member</option>\r\n                        <option value=\"mod\">a mod</option>\r\n                        <option value=\"admin\">an admin</option>\r\n                        <option value=\"owner\">the owner</option>\r\n                    </select>\r\n                </label>\r\n                <br>\r\n                <label>Player is not:\r\n                    <select data-target=\"not_group\">\r\n                        <option value=\"nobody\">nobody</option>\r\n                        <option value=\"staff\">a staff member</option>\r\n                        <option value=\"mod\">a mod</option>\r\n                        <option value=\"admin\">an admin</option>\r\n                        <option value=\"owner\">the owner</option>\r\n                    </select>\r\n                </label>\r\n                <br>\r\n                <input type=\"number\" value=\"0\" data-target=\"joins_low\">\r\n                <span> &le; player joins &le; </span>\r\n                <input type=\"number\" value=\"9999\" data-target=\"joins_high\">\r\n            </details>\r\n            <a>Delete</a>\r\n        </div>\r\n    </div>\r\n</template>\r\n<div class=\"container is-fluid\">\r\n    <section class=\"section is-small\">\r\n        <span class=\"button is-primary is-pulled-right\">+</span>\r\n        <h3 class=\"title is-4\">These are checked whenever someone says something.</h3>\r\n        <span>You can use {{Name}}, {{NAME}}, {{name}}, and {{ip}} in your message. If you put an asterisk (*) in your trigger,\r\n            it will be treated as a wildcard. (Trigger \"te*st\" will match \"tea stuff\" and \"test\")</span>\r\n    </section>\r\n    <div class=\"columns is-multiline messages-container\" style=\"border-top: 1px solid #000\"></div>\r\n</div>";

var annHtml = "<template>\r\n    <div class=\"column is-full\">\r\n        <div class=\"box\">\r\n            <label>Send:</label>\r\n            <textarea class=\"textarea is-fluid\" data-target=\"message\"></textarea>\r\n            <a>Delete</a>\r\n        </div>\r\n        <div>\r\n            Wait X minutes...\r\n        </div>\r\n    </div>\r\n</template>\r\n<div class=\"container is-fluid\">\r\n    <section class=\"section is-small\">\r\n        <span class=\"button is-primary is-pulled-right\">+</span>\r\n        <h3 class=\"title is-4\">These are sent according to a regular schedule.</h3>\r\n        <span>If you have one announcement, it is sent every X minutes, if you have two, then the first is sent at X minutes, and the second is sent X minutes after the first. Change X in the settings tab. Once the bot reaches the end of the list, it starts over at the top.</span>\r\n    </section>\r\n    <div class=\"columns is-multiline messages-container\" style=\"border-top: 1px solid #000\"></div>\r\n</div>";

class MessagesTab extends RemovableMessageHelper {
    constructor({ name, ex, id }) {
        super(id, ex);
        this.setup = () => {
            this.insertHTML();
            this.template = this.tab.querySelector('template');
            this.root = this.tab.querySelector('.messages-container');
            // Auto save messages
            this.tab.addEventListener('input', () => this.save());
            // Create a new message
            let button = this.tab.querySelector('.button.is-primary');
            button.addEventListener('click', () => {
                this.addMessage();
            });
            // Deleting messages
            this.tab.addEventListener('click', event => {
                let target = event.target;
                if (target.tagName == 'A' && target.textContent == 'Delete') {
                    event.preventDefault();
                    this.ui.alert('Really delete this message?', [{ text: 'Delete', style: 'is-danger' }, { text: 'Cancel' }], result => {
                        if (result != 'Delete')
                            return;
                        let parent = target;
                        while (!parent.classList.contains('column')) {
                            parent = parent.parentElement;
                        }
                        parent.remove();
                        this.save();
                    });
                }
            });
            this.ex.storage.get(this.id, []).forEach(message => {
                this.addMessage(message);
            });
        };
        this.getMessages = () => {
            let messages = [];
            Array.from(this.root.children).forEach(element => {
                let data = {};
                Array.from(element.querySelectorAll('[data-target]')).forEach((input) => {
                    let name = input.dataset['target'];
                    if (!name)
                        return;
                    switch (input.getAttribute('type')) {
                        case 'number':
                            data[name] = +input.value;
                            break;
                        default:
                            data[name] = input.value;
                    }
                });
                messages.push(data);
            });
            return messages;
        };
        this.ui = ex.bot.getExports('ui');
        this.ex = ex;
        this.tab = this.ui.addTab(name, 'messages');
    }
    remove() {
        this.ui.removeTab(this.tab);
    }
    save() {
        this.ex.storage.set(this.id, this.getMessages());
    }
}
class JoinTab extends MessagesTab {
    constructor(ex) {
        super({ name: 'Join', id: 'joinArr', ex });
        this.insertHTML = () => {
            this.tab.innerHTML = joinHtml;
        };
        this.addMessage = (msg = {}) => {
            this.ui.buildTemplate(this.template, this.root, [
                { selector: '[data-target=message]', text: msg.message || '' },
                { selector: '[data-target=joins_low]', value: msg.joins_low || 0 },
                { selector: '[data-target=joins_high]', value: msg.joins_high || 9999 },
                { selector: '[data-target=group]', value: msg.group || 'all' },
                { selector: '[data-target=not_group]', value: msg.not_group || 'nobody' },
            ]);
        };
    }
}
class LeaveTab extends MessagesTab {
    constructor(ex) {
        super({ name: 'Leave', id: 'leaveArr', ex });
        this.insertHTML = () => {
            this.tab.innerHTML = leaveHtml;
        };
        this.addMessage = (msg = {}) => {
            this.ui.buildTemplate(this.template, this.root, [
                { selector: '[data-target=message]', text: msg.message || '' },
                { selector: '[data-target=joins_low]', value: msg.joins_low || 0 },
                { selector: '[data-target=joins_high]', value: msg.joins_high || 9999 },
                { selector: '[data-target=group]', value: msg.group || 'all' },
                { selector: '[data-target=not_group]', value: msg.not_group || 'nobody' }
            ]);
        };
    }
}
class TriggerTab extends MessagesTab {
    constructor(ex) {
        super({ name: 'Trigger', id: 'triggerArr', ex });
        this.insertHTML = () => {
            this.tab.innerHTML = triggerHtml;
        };
        this.addMessage = (msg = {}) => {
            this.ui.buildTemplate(this.template, this.root, [
                { selector: '[data-target=message]', text: msg.message || '' },
                { selector: '[data-target=trigger]', value: msg.trigger || '' },
                { selector: '[data-target=joins_low]', value: msg.joins_low || 0 },
                { selector: '[data-target=joins_high]', value: msg.joins_high || 9999 },
                { selector: '[data-target=group]', value: msg.group || 'all' },
                { selector: '[data-target=not_group]', value: msg.not_group || 'nobody' }
            ]);
        };
    }
}
class AnnouncementTab extends MessagesTab {
    constructor(ex) {
        super({ name: 'Announcements', id: 'announcementArr', ex });
        this.insertHTML = () => {
            this.tab.innerHTML = annHtml;
        };
        this.addMessage = (msg = {}) => {
            this.ui.buildTemplate(this.template, this.root, [
                { selector: '[data-target=message]', text: msg.message || '' },
            ]);
        };
    }
}

var css = ".messages-container input[type=number] {\r\n    width: 5em;\r\n}\r\n\r\n.messages-container small {\r\n    color: #777;\r\n}\r\n";

MessageBot$1.registerExtension('messages', function (ex, world) {
    let listeners = [];
    ex.remove = () => listeners.forEach(l => l.remove());
    let hasLoaded = false;
    let delayLoad = () => {
        if (hasLoaded)
            return;
        hasLoaded = true;
        let timeout = setTimeout(() => {
            listeners = [
                new JoinListener(ex),
                new LeaveListener(ex),
                new TriggerListener(ex),
                new AnnouncementListener(ex),
            ];
        }, 500);
        listeners = [{
                remove: () => clearTimeout(timeout)
            }];
    };
    world.onJoin.one(delayLoad);
    world.onLeave.one(delayLoad);
    world.onMessage.one(delayLoad);
    // Loaded in a browser?
    if (ex.bot.getExports('ui')) {
        let style = document.head.appendChild(document.createElement('style'));
        style.innerHTML = css;
        let ui = ex.bot.getExports('ui');
        ui.addTabGroup('Messages', 'messages');
        let tabs = [
            new JoinTab(ex),
            new LeaveTab(ex),
            new TriggerTab(ex),
            new AnnouncementTab(ex),
        ];
        tabs.forEach(tab => tab.setup());
        listeners = listeners.concat(...tabs, { remove: () => style.remove() }, { remove: () => ui.removeTabGroup('messages') });
    }
});

function history(input) {
    let history = [];
    let current = 0;
    function addToHistory(message) {
        history.push(message);
        while (history.length > 100) {
            history.shift();
        }
        current = history.length;
    }
    function addIfNew(message) {
        if (message != history.slice(-1).pop()) {
            addToHistory(message);
        }
        else {
            current = history.length;
        }
    }
    input.addEventListener('keydown', event => {
        if (event.key == 'ArrowUp') {
            if (input.value.length && current == history.length) {
                addToHistory(input.value);
                current--;
            }
            if (history.length && current) {
                input.value = history[--current];
            }
        }
        else if (event.key == 'ArrowDown') {
            if (history.length > current + 1) {
                input.value = history[++current];
            }
            else if (history.length == current + 1) {
                input.value = '';
                current = history.length;
            }
        }
        else if (event.key == 'Enter') {
            addIfNew(input.value);
        }
    });
}

var html = "<template>\r\n    <li>\r\n        <span>NAME</span>\r\n        <span>: Message</span>\r\n    </li>\r\n</template>\r\n<div id=\"console\">\r\n    <div class=\"chat\">\r\n        <ul></ul>\r\n    </div>\r\n    <div class=\"chat-control\">\r\n        <div class=\"field has-addons\">\r\n            <p class=\"control is-expanded\">\r\n                <input type=\"text\" class=\"input\" />\r\n            </p>\r\n            <p class=\"control\">\r\n                <button class=\"input button is-primary\">SEND</button>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>";

var css$1 = "#console .mod > span:first-child {\r\n    color: #05f529;\r\n}\r\n\r\n#console .admin > span:first-child {\r\n    color: #2b26bd;\r\n}\r\n\r\n#console .chat {\r\n    margin: 0 1em;\r\n    height: calc(100vh - 52px - 4.25em);\r\n    overflow-y: auto;\r\n}\r\n\r\n#console .chat-control {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100vw;\r\n    background: #fff;\r\n}\r\n\r\n#console .field {\r\n    margin: 1em;\r\n}\r\n";

MessageBot$1.registerExtension('console', function (ex, world) {
    if (!ex.bot.getExports('ui')) {
        throw new Error('This extension should only be loaded in a browser, and must be loaded after the UI is loaded.');
    }
    const ui = ex.bot.getExports('ui');
    // Create the tab.
    let style = document.head.appendChild(document.createElement('style'));
    style.textContent = css$1;
    let tab = ui.addTab('Console');
    tab.innerHTML = html;
    let chatUl = tab.querySelector('ul');
    let chatContainer = chatUl.parentElement;
    let template = tab.querySelector('template');
    // Handle sending
    let input = tab.querySelector('input');
    function userSend() {
        ex.bot.send(input.value);
        input.value = '';
    }
    input.addEventListener('keyup', event => {
        if (event.key == 'Enter') {
            userSend();
        }
    });
    // History module, used to be a separate extension
    history(input);
    tab.querySelector('button').addEventListener('click', userSend);
    // Auto scroll when new chat is added to the page, unless we are scrolled up.
    new MutationObserver(function (events) {
        let total = chatUl.children.length;
        // Determine how many messages have been added
        let addedHeight = 0;
        for (let i = total - events.length; i < total; i++) {
            addedHeight += chatUl.children[i].clientHeight;
        }
        // If we were scrolled down already, stay scrolled down
        if (chatContainer.scrollHeight - chatContainer.clientHeight - chatContainer.scrollTop == addedHeight) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
        // Remove old messages if necessary
        while (chatUl.children.length > 500) {
            chatUl.children[0].remove();
        }
    }).observe(chatUl, { childList: true, subtree: true });
    // Add a message to the page
    function addPlayerMessage(player, message) {
        if (!message.length)
            return;
        let messageClass = 'player';
        if (player.isAdmin)
            messageClass = 'admin';
        if (player.isMod)
            messageClass = 'mod';
        ui.buildTemplate(template, chatUl, [
            { selector: 'li', 'class': messageClass },
            { selector: 'span:first-child', text: player.name },
            { selector: 'span:last-child', text: ': ' + message }
        ]);
    }
    function addGenericMessage(message) {
        if (!message.length)
            return;
        let li = document.createElement('li');
        li.textContent = message;
        chatUl.appendChild(li);
    }
    // Export required functions
    let consoleExports = {
        log: (message) => addPlayerMessage(world.getPlayer('SERVER'), message)
    };
    ex.exports = consoleExports;
    function logJoins(player) {
        if (ex.storage.get('logJoinIps', true)) {
            consoleExports.log(`${player.name} (${player.ip}) joined.`);
        }
        else {
            consoleExports.log(`${player.name} joined.`);
        }
    }
    world.onJoin.sub(logJoins);
    function logLeaves(player) {
        consoleExports.log(player.name + ' left');
    }
    world.onLeave.sub(logLeaves);
    function logMessages({ player, message }) {
        addPlayerMessage(player, message);
    }
    world.onMessage.sub(logMessages);
    function logOther(message) {
        if (ex.storage.get('logUnparsedMessages', true)) {
            addGenericMessage(message);
        }
    }
    world.onOther.sub(logOther);
    ex.remove = function () {
        ui.removeTab(tab);
        style.remove();
        world.onJoin.unsub(logJoins);
        world.onLeave.unsub(logLeaves);
        world.onMessage.unsub(logMessages);
        world.onOther.unsub(logOther);
    };
});

var html$1 = "<div class=\"container\">\r\n  <h3 class=\"title\">General Settings</h3>\r\n  <p class=\"control\">\r\n    <label>Minutes between announcements</label>\r\n    <input class=\"input\" type=\"number\" data-target=\"messages/announcementDelay\">\r\n    <br>\r\n  </p>\r\n  <p class=\"control\">\r\n    <label>Maximum trigger responses to a message</label>\r\n    <input class=\"input\" type=\"number\" data-target=\"messages/maxResponses\">\r\n  </p>\r\n  <p class=\"control\">\r\n    <label class=\"checkbox\">\r\n      <input type=\"checkbox\" data-target=\"console/logJoinIps\"> Show joining IPs in console\r\n    </label>\r\n  </p>\r\n  <p class=\"control\">\r\n    <label class=\"checkbox\">\r\n      <input data-target=\"console/logUnparsedMessages\" type=\"checkbox\"> Log unparsed messages\r\n    </label>\r\n  </p>\r\n\r\n  <hr>\r\n\r\n  <h3 class=\"title\">Advanced Settings</h3>\r\n  <div class=\"message is-warning\">\r\n    <div class=\"message-header\">\r\n      <p>Warning</p>\r\n    </div>\r\n    <div class=\"message-body\">\r\n      <p>Changing these options can result in unexpected behavior.\r\n        <a href=\"https://github.com/Bibliofile/Blockheads-MessageBot/wiki/1.-Advanced-Options/\" target=\"_blank\">Read this first</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <p class=\"control\">\r\n    <label class=\"checkbox\">\r\n      <input type=\"checkbox\" data-target=\"messages/regexTriggers\"> Parse triggers as RegEx\r\n    </label>\r\n  </p>\r\n  <p class=\"control\">\r\n    <label class=\"checkbox\">\r\n      <input type=\"checkbox\" data-target=\"messages/disableWhitespaceTrimming\"> Disable whitespace trimming\r\n    </label>\r\n  </p>\r\n  <p class=\"control\">\r\n    <label class=\"checkbox\">\r\n      <input type=\"checkbox\" data-target=\"splitMessages\"> Split messages\r\n    </label>\r\n  </p>\r\n  <label class=\"label\">Split token:</label>\r\n  <p class=\"control\">\r\n    <input class=\"input\" type=\"text\" data-target=\"splitToken\">\r\n  </p>\r\n  <p class=\"control\">\r\n    <label class=\"checkbox\">\r\n      <input type=\"checkbox\" data-target=\"extensions/devMode\"> Developer mode\r\n    </label>\r\n  </p>\r\n  <label class=\"label\">Extension Repsitory URLs (one per line, you must restart the bot process for this to take affect.):</label>\r\n  <p class=\"control\">\r\n    <textarea class=\"textarea is-fluid\" type=\"text\" data-target=\"extensions/repos\"></textarea>\r\n  </p>\r\n\r\n  <br>\r\n</div>";

// This is essentially a copy from the Browser-Loader package with the backup settings stripped out.
const settingDefaults = [
    // General
    ['messages/announcementDelay', 10],
    ['messages/maxResponses', 3],
    ['console/logJoinIps', true],
    ['console/logUnparsedMessages', true],
    // Advanced
    ['messages/regexTriggers', false],
    ['messages/disableWhitespaceTrimming', false],
    ['splitMessages', false],
    ['splitToken', '<split>'],
    ['extensions/devMode', false],
    ['extensions/repos', 'https://gitcdn.xyz/cdn/Blockheads-Messagebot/Extensions/master/extensions.json'],
];
MessageBot$1.registerExtension('settings', ex => {
    let settingsRoot = ex.bot.storage;
    let ui = ex.bot.getExports('ui');
    let tab = ui.addTab('Settings');
    tab.innerHTML = html$1;
    for (let [key, def] of settingDefaults) {
        let el = tab.querySelector(`[data-target="${key}"]`);
        if (typeof def == 'boolean') {
            el.checked = settingsRoot.get(key, def);
        }
        else {
            el.value = String(settingsRoot.get(key, def));
        }
    }
    tab.addEventListener('change', () => {
        for (let [key, def] of settingDefaults) {
            let el = tab.querySelector(`[data-target="${key}"]`);
            if (typeof def == 'boolean') {
                settingsRoot.set(key, el.checked);
            }
            else if (typeof def == 'number') {
                settingsRoot.set(key, +el.value);
            }
            else {
                settingsRoot.set(key, el.value);
            }
        }
    });
    ex.remove = function () {
        ui.removeTab(tab);
    };
});

window['@bhmb/bot'] = { MessageBot: MessageBot$1 };
const worldId = window.worldId;
MessageBot$1.dependencies = { Api, getWorlds, fetch };
let info = {
    name: document.title,
    id: worldId
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield load();
        let bot = new MessageBot$$1(new Storage$1(''), info);
        bot.addExtension('ui');
        bot.addExtension('console');
        document.querySelector('.nav-item').click();
        // Fix sending from the console
        const consoleInput = document.querySelector('.chat-control input');
        const consoleButton = document.querySelector('.chat-control button');
        consoleButton.addEventListener('mouseup', () => bot.send(consoleInput.value, {}, true));
        consoleInput.addEventListener('keydown', event => {
            if (event.key == 'Enter')
                bot.send(consoleInput.value, {}, true);
        });
        bot.addExtension('messages');
        bot.addExtension('settings');
    });
}
main();

}());
