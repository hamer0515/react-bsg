export const getDateObjectFromFormat = (a, b) => {
    a = a + "";
    b = b + "";
    var d = 0;
    var e = 0;
    var c = "";
    var f = "";
    var g = "";
    var x,
        y;
    // Default to 1/1 of the current year midnight GMT
    var j = new Date().getFullYear();
    var k = 1;
    var l = 1;
    var m = 0;
    var n = 0;
    var o = 0;
    var p = "";
    while (e < b.length) {
        c = b.charAt(e);
        f = "";
        while ((b.charAt(e) == c) && (e < b.length)) {
            f += b.charAt(e++)
        }
        if (f == "yyyy" || f == "yy" || f == "y") {
            if (f == "yyyy") {
                x = 4;
                y = 4
            }
            if (f == "yy") {
                x = 2;
                y = 2
            }
            if (f == "y") {
                x = 2;
                y = 4
            }
            j = _getInt(a, d, x, y);
            if (j == null) {
                return 0
            }
            d += j.length;
            if (j.length == 2) {
                if (j > 70) {
                    j = 1900 + (j - 0)
                } else {
                    j = 2000 + (j - 0)
                }
            }
        } else if (f == "MMM" || f == "NNN") {
            k = 0;
            for (var i = 0; i < MONTH_NAMES.length; i++) {
                var q = MONTH_NAMES[i];
                if (a.substring(d, d + q.length).toLowerCase() == q.toLowerCase()) {
                    if (f == "MMM" || (f == "NNN" && i > 11)) {
                        k = i + 1;
                        if (k > 12) {
                            k -= 12
                        }
                        d += q.length;
                        break
                    }
                }
            }
            if ((k < 1) || (k > 12)) {
                return 0
            }
        } else if (f == "EE" || f == "E") {
            for (var i = 0; i < DAY_NAMES.length; i++) {
                var r = DAY_NAMES[i];
                if (a.substring(d, d + r.length).toLowerCase() == r.toLowerCase()) {
                    d += r.length;
                    break
                }
            }
        } else if (f == "MM" || f == "M") {
            k = _getInt(a, d, f.length, 2);
            if (k == null || (k < 1) || (k > 12)) {
                return 0
            }
            d += k.length
        } else if (f == "dd" || f == "d") {
            l = _getInt(a, d, f.length, 2);
            if (l == null || (l < 1) || (l > 31)) {
                return 0
            }
            d += l.length
        } else if (f == "hh" || f == "h") {
            m = _getInt(a, d, f.length, 2);
            if (m == null || (m < 1) || (m > 12)) {
                return 0
            }
            d += m.length
        } else if (f == "HH" || f == "H") {
            m = _getInt(a, d, f.length, 2);
            if (m == null || (m < 0) || (m > 23)) {
                return 0
            }
            d += m.length
        } else if (f == "KK" || f == "K") {
            m = _getInt(a, d, f.length, 2);
            if (m == null || (m < 0) || (m > 11)) {
                return 0
            }
            d += m.length
        } else if (f == "kk" || f == "k") {
            m = _getInt(a, d, f.length, 2);
            if (m == null || (m < 1) || (m > 24)) {
                return 0
            }
            d += m.length;
            m--
        } else if (f == "mm" || f == "m") {
            n = _getInt(a, d, f.length, 2);
            if (n == null || (n < 0) || (n > 59)) {
                return 0
            }
            d += n.length
        } else if (f == "ss" || f == "s") {
            o = _getInt(a, d, f.length, 2);
            if (o == null || (o < 0) || (o > 59)) {
                return 0
            }
            d += o.length
        } else if (f == "a") {
            if (a.substring(d, d + 2).toLowerCase() == "am") {
                p = "AM"
            } else if (a.substring(d, d + 2).toLowerCase() == "pm") {
                p = "PM"
            } else {
                return 0
            }
            d += 2
        } else {
            if (a.substring(d, d + f.length) != f) {
                return 0
            } else {
                d += f.length
            }
        }
    }
    if (d != a.length) {
        return 0
    }
    if (k == 2) {
        if (((j % 4 == 0) && (j % 100 != 0)) || (j % 400 == 0)) {
            if (l > 29) {
                return 0
            }
        } else {
            if (l > 28) {
                return 0
            }
        }
    }
    if ((k == 4) || (k == 6) || (k == 9) || (k == 11)) {
        if (l > 30) {
            return 0
        }
    }
    if (m < 12 && p == "PM") {
        m = m - 0 + 12
    } else if (m > 11 && p == "AM") {
        m -= 12
    }
    return new Date(j, k - 1, l, m, n, o);
}

const _getInt = (a, i, b, c) => {
    for (var x = c; x >= b; x--) {
        var d = a.substring(i, i + x);
        if (d.length < b) {
            return null
        }
        if (_isInteger(d)) {
            return d
        }
    }
    return null
}

const _isInteger = (a) => {
    var b = "1234567890";
    for (var i = 0; i < a.length; i++) {
        if (b.indexOf(a.charAt(i)) == -1) {
            return false
        }
    }
    return true
}

const MONTH_NAMES = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
const DAY_NAMES = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');