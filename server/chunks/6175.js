"use strict";
exports.id = 6175;
exports.ids = [6175];
exports.modules = {

/***/ 76175:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  diagram: () => (/* binding */ diagram)
});

// EXTERNAL MODULE: ./node_modules/mermaid/dist/flowDb-170db09d.js
var flowDb_170db09d = __webpack_require__(47980);
// EXTERNAL MODULE: ./node_modules/dagre-d3-es/src/graphlib/index.js
var graphlib = __webpack_require__(50680);
// EXTERNAL MODULE: ./node_modules/d3/src/index.js + 197 modules
var src = __webpack_require__(92509);
// EXTERNAL MODULE: ./node_modules/mermaid/dist/mermaid-934d9bea.js + 8 modules
var mermaid_934d9bea = __webpack_require__(58810);
// EXTERNAL MODULE: ./node_modules/lodash-es/has.js + 1 modules
var has = __webpack_require__(19137);
// EXTERNAL MODULE: ./node_modules/lodash-es/defaults.js
var defaults = __webpack_require__(30235);
// EXTERNAL MODULE: ./node_modules/lodash-es/forEach.js
var forEach = __webpack_require__(67094);
// EXTERNAL MODULE: ./node_modules/dagre-d3-es/src/dagre/index.js + 64 modules
var dagre = __webpack_require__(32085);
// EXTERNAL MODULE: ./node_modules/dagre-d3-es/src/dagre-js/util.js
var util = __webpack_require__(26847);
;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/arrows.js




var arrows = {
  normal,
  vee,
  undirected,
};

function setArrows(value) {
  arrows = value;
}

function normal(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 0 L 10 5 L 0 10 z')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  util/* applyStyle */.bg(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}

function vee(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 0 L 10 5 L 0 10 L 4 5 z')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  util/* applyStyle */.bg(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}

function undirected(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 5 L 10 5')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  util/* applyStyle */.bg(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}

// EXTERNAL MODULE: ./node_modules/dagre-d3-es/src/dagre-js/label/add-html-label.js
var add_html_label = __webpack_require__(95350);
;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/label/add-svg-label.js




function addSVGLabel(root, node) {
  var domNode = root;

  domNode.node().appendChild(node.label);

  util/* applyStyle */.bg(domNode, node.labelStyle);

  return domNode;
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/label/add-text-label.js




/*
 * Attaches a text label to the specified root. Handles escape sequences.
 */
function addTextLabel(root, node) {
  var domNode = root.append('text');

  var lines = processEscapeSequences(node.label).split('\n');
  for (var i = 0; i < lines.length; i++) {
    domNode
      .append('tspan')
      .attr('xml:space', 'preserve')
      .attr('dy', '1em')
      .attr('x', '1')
      .text(lines[i]);
  }

  util/* applyStyle */.bg(domNode, node.labelStyle);

  return domNode;
}

function processEscapeSequences(text) {
  var newText = '';
  var escaped = false;
  var ch;
  for (var i = 0; i < text.length; ++i) {
    ch = text[i];
    if (escaped) {
      switch (ch) {
        case 'n':
          newText += '\n';
          break;
        default:
          newText += ch;
      }
      escaped = false;
    } else if (ch === '\\') {
      escaped = true;
    } else {
      newText += ch;
    }
  }
  return newText;
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/label/add-label.js






function addLabel(root, node, location) {
  var label = node.label;
  var labelSvg = root.append('g');

  // Allow the label to be a string, a function that returns a DOM element, or
  // a DOM element itself.
  if (node.labelType === 'svg') {
    addSVGLabel(labelSvg, node);
  } else if (typeof label !== 'string' || node.labelType === 'html') {
    (0,add_html_label/* addHtmlLabel */.a)(labelSvg, node);
  } else {
    addTextLabel(labelSvg, node);
  }

  var labelBBox = labelSvg.node().getBBox();
  var y;
  switch (location) {
    case 'top':
      y = -node.height / 2;
      break;
    case 'bottom':
      y = node.height / 2 - labelBBox.height;
      break;
    default:
      y = -labelBBox.height / 2;
  }
  labelSvg.attr('transform', 'translate(' + -labelBBox.width / 2 + ',' + y + ')');

  return labelSvg;
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/create-clusters.js






var createClusters = function (selection, g) {
  var clusters = g.nodes().filter(function (v) {
    return util/* isSubgraph */.bF(g, v);
  });
  var svgClusters = selection.selectAll('g.cluster').data(clusters, function (v) {
    return v;
  });

  util/* applyTransition */.WR(svgClusters.exit(), g).style('opacity', 0).remove();

  var enterSelection = svgClusters
    .enter()
    .append('g')
    .attr('class', 'cluster')
    .attr('id', function (v) {
      var node = g.node(v);
      return node.id;
    })
    .style('opacity', 0)
    .each(function (v) {
      var node = g.node(v);
      var thisGroup = src/* select */.Ys(this);
      src/* select */.Ys(this).append('rect');
      var labelGroup = thisGroup.append('g').attr('class', 'label');
      addLabel(labelGroup, node, node.clusterLabelPos);
    });

  svgClusters = svgClusters.merge(enterSelection);

  svgClusters = util/* applyTransition */.WR(svgClusters, g).style('opacity', 1);

  svgClusters.selectAll('rect').each(function (c) {
    var node = g.node(c);
    var domCluster = src/* select */.Ys(this);
    util/* applyStyle */.bg(domCluster, node.style);
  });

  return svgClusters;
};

function setCreateClusters(value) {
  createClusters = value;
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/create-edge-labels.js







let createEdgeLabels = function (selection, g) {
  var svgEdgeLabels = selection
    .selectAll('g.edgeLabel')
    .data(g.edges(), function (e) {
      return util/* edgeToId */.O1(e);
    })
    .classed('update', true);

  svgEdgeLabels.exit().remove();
  svgEdgeLabels.enter().append('g').classed('edgeLabel', true).style('opacity', 0);

  svgEdgeLabels = selection.selectAll('g.edgeLabel');

  svgEdgeLabels.each(function (e) {
    var root = src/* select */.Ys(this);
    root.select('.label').remove();
    var edge = g.edge(e);
    var label = addLabel(root, g.edge(e), 0).classed('label', true);
    var bbox = label.node().getBBox();

    if (edge.labelId) {
      label.attr('id', edge.labelId);
    }
    if (!has/* default */.Z(edge, 'width')) {
      edge.width = bbox.width;
    }
    if (!has/* default */.Z(edge, 'height')) {
      edge.height = bbox.height;
    }
  });

  var exitSelection;

  if (svgEdgeLabels.exit) {
    exitSelection = svgEdgeLabels.exit();
  } else {
    exitSelection = svgEdgeLabels.selectAll(null); // empty selection
  }

  util/* applyTransition */.WR(exitSelection, g).style('opacity', 0).remove();

  return svgEdgeLabels;
};

function setCreateEdgeLabels(value) {
  createEdgeLabels = value;
}

// EXTERNAL MODULE: ./node_modules/lodash-es/uniqueId.js
var uniqueId = __webpack_require__(27160);
// EXTERNAL MODULE: ./node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(68417);
;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-node.js


function intersectNode(node, point) {
  return node.intersect(point);
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/create-edge-paths.js







var createEdgePaths = function (selection, g, arrows) {
  var previousPaths = selection
    .selectAll('g.edgePath')
    .data(g.edges(), function (e) {
      return util/* edgeToId */.O1(e);
    })
    .classed('update', true);

  var newPaths = enter(previousPaths, g);
  exit(previousPaths, g);

  var svgPaths = previousPaths.merge !== undefined ? previousPaths.merge(newPaths) : previousPaths;
  util/* applyTransition */.WR(svgPaths, g).style('opacity', 1);

  // Save DOM element in the path group, and set ID and class
  svgPaths.each(function (e) {
    var domEdge = src/* select */.Ys(this);
    var edge = g.edge(e);
    edge.elem = this;

    if (edge.id) {
      domEdge.attr('id', edge.id);
    }

    util/* applyClass */.$p(
      domEdge,
      edge['class'],
      (domEdge.classed('update') ? 'update ' : '') + 'edgePath'
    );
  });

  svgPaths.selectAll('path.path').each(function (e) {
    var edge = g.edge(e);
    edge.arrowheadId = uniqueId/* default */.Z('arrowhead');

    var domEdge = src/* select */.Ys(this)
      .attr('marker-end', function () {
        return 'url(' + makeFragmentRef(location.href, edge.arrowheadId) + ')';
      })
      .style('fill', 'none');

    util/* applyTransition */.WR(domEdge, g).attr('d', function (e) {
      return calcPoints(g, e);
    });

    util/* applyStyle */.bg(domEdge, edge.style);
  });

  svgPaths.selectAll('defs *').remove();
  svgPaths.selectAll('defs').each(function (e) {
    var edge = g.edge(e);
    var arrowhead = arrows[edge.arrowhead];
    arrowhead(src/* select */.Ys(this), edge.arrowheadId, edge, 'arrowhead');
  });

  return svgPaths;
};

function setCreateEdgePaths(value) {
  createEdgePaths = value;
}

function makeFragmentRef(url, fragmentId) {
  var baseUrl = url.split('#')[0];
  return baseUrl + '#' + fragmentId;
}

function calcPoints(g, e) {
  var edge = g.edge(e);
  var tail = g.node(e.v);
  var head = g.node(e.w);
  var points = edge.points.slice(1, edge.points.length - 1);
  points.unshift(intersectNode(tail, points[0]));
  points.push(intersectNode(head, points[points.length - 1]));

  return createLine(edge, points);
}

function createLine(edge, points) {
  // @ts-expect-error
  var line = (src/* line */.jvg || src/* svg */.YPS.line)()
    .x(function (d) {
      return d.x;
    })
    .y(function (d) {
      return d.y;
    });

  (line.curve || line.interpolate)(edge.curve);

  return line(points);
}

function getCoords(elem) {
  var bbox = elem.getBBox();
  var matrix = elem.ownerSVGElement
    .getScreenCTM()
    .inverse()
    .multiply(elem.getScreenCTM())
    .translate(bbox.width / 2, bbox.height / 2);
  return { x: matrix.e, y: matrix.f };
}

function enter(svgPaths, g) {
  var svgPathsEnter = svgPaths.enter().append('g').attr('class', 'edgePath').style('opacity', 0);
  svgPathsEnter
    .append('path')
    .attr('class', 'path')
    .attr('d', function (e) {
      var edge = g.edge(e);
      var sourceElem = g.node(e.v).elem;
      var points = range/* default */.Z(edge.points.length).map(function () {
        return getCoords(sourceElem);
      });
      return createLine(edge, points);
    });
  svgPathsEnter.append('defs');
  return svgPathsEnter;
}

function exit(svgPaths, g) {
  var svgPathExit = svgPaths.exit();
  util/* applyTransition */.WR(svgPathExit, g).style('opacity', 0).remove();
}

// EXTERNAL MODULE: ./node_modules/lodash-es/pick.js + 4 modules
var pick = __webpack_require__(95708);
;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/create-nodes.js







var createNodes = function (selection, g, shapes) {
  var simpleNodes = g.nodes().filter(function (v) {
    return !util/* isSubgraph */.bF(g, v);
  });
  var svgNodes = selection
    .selectAll('g.node')
    .data(simpleNodes, function (v) {
      return v;
    })
    .classed('update', true);

  svgNodes.exit().remove();

  svgNodes.enter().append('g').attr('class', 'node').style('opacity', 0);

  svgNodes = selection.selectAll('g.node');

  svgNodes.each(function (v) {
    var node = g.node(v);
    var thisGroup = src/* select */.Ys(this);
    util/* applyClass */.$p(
      thisGroup,
      node['class'],
      (thisGroup.classed('update') ? 'update ' : '') + 'node'
    );

    thisGroup.select('g.label').remove();
    var labelGroup = thisGroup.append('g').attr('class', 'label');
    var labelDom = addLabel(labelGroup, node);
    var shape = shapes[node.shape];
    var bbox = pick/* default */.Z(labelDom.node().getBBox(), 'width', 'height');

    node.elem = this;

    if (node.id) {
      thisGroup.attr('id', node.id);
    }
    if (node.labelId) {
      labelGroup.attr('id', node.labelId);
    }

    if (has/* default */.Z(node, 'width')) {
      bbox.width = node.width;
    }
    if (has/* default */.Z(node, 'height')) {
      bbox.height = node.height;
    }

    bbox.width += node.paddingLeft + node.paddingRight;
    bbox.height += node.paddingTop + node.paddingBottom;
    labelGroup.attr(
      'transform',
      'translate(' +
        (node.paddingLeft - node.paddingRight) / 2 +
        ',' +
        (node.paddingTop - node.paddingBottom) / 2 +
        ')'
    );

    var root = src/* select */.Ys(this);
    root.select('.label-container').remove();
    var shapeSvg = shape(root, bbox, node).classed('label-container', true);
    util/* applyStyle */.bg(shapeSvg, node.style);

    var shapeBBox = shapeSvg.node().getBBox();
    node.width = shapeBBox.width;
    node.height = shapeBBox.height;
  });

  var exitSelection;

  if (svgNodes.exit) {
    exitSelection = svgNodes.exit();
  } else {
    exitSelection = svgNodes.selectAll(null); // empty selection
  }

  util/* applyTransition */.WR(exitSelection, g).style('opacity', 0).remove();

  return svgNodes;
};

function setCreateNodes(value) {
  createNodes = value;
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/position-clusters.js





function positionClusters(selection, g) {
  var created = selection.filter(function () {
    return !src/* select */.Ys(this).classed('update');
  });

  function translate(v) {
    var node = g.node(v);
    return 'translate(' + node.x + ',' + node.y + ')';
  }

  created.attr('transform', translate);

  util/* applyTransition */.WR(selection, g).style('opacity', 1).attr('transform', translate);

  util/* applyTransition */.WR(created.selectAll('rect'), g)
    .attr('width', function (v) {
      return g.node(v).width;
    })
    .attr('height', function (v) {
      return g.node(v).height;
    })
    .attr('x', function (v) {
      var node = g.node(v);
      return -node.width / 2;
    })
    .attr('y', function (v) {
      var node = g.node(v);
      return -node.height / 2;
    });
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/position-edge-labels.js






function positionEdgeLabels(selection, g) {
  var created = selection.filter(function () {
    return !src/* select */.Ys(this).classed('update');
  });

  function translate(e) {
    var edge = g.edge(e);
    return has/* default */.Z(edge, 'x') ? 'translate(' + edge.x + ',' + edge.y + ')' : '';
  }

  created.attr('transform', translate);

  util/* applyTransition */.WR(selection, g).style('opacity', 1).attr('transform', translate);
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/position-nodes.js





function positionNodes(selection, g) {
  var created = selection.filter(function () {
    return !src/* select */.Ys(this).classed('update');
  });

  function translate(v) {
    var node = g.node(v);
    return 'translate(' + node.x + ',' + node.y + ')';
  }

  created.attr('transform', translate);

  util/* applyTransition */.WR(selection, g).style('opacity', 1).attr('transform', translate);
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-ellipse.js


function intersectEllipse(node, rx, ry, point) {
  // Formulae from: http://mathworld.wolfram.com/Ellipse-LineIntersection.html

  var cx = node.x;
  var cy = node.y;

  var px = cx - point.x;
  var py = cy - point.y;

  var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);

  var dx = Math.abs((rx * ry * px) / det);
  if (point.x < cx) {
    dx = -dx;
  }
  var dy = Math.abs((rx * ry * py) / det);
  if (point.y < cy) {
    dy = -dy;
  }

  return { x: cx + dx, y: cy + dy };
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-circle.js




function intersectCircle(node, rx, point) {
  return intersectEllipse(node, rx, rx, point);
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-line.js


/*
 * Returns the point at which two lines, p and q, intersect or returns
 * undefined if they do not intersect.
 */
function intersectLine(p1, p2, q1, q2) {
  // Algorithm from J. Avro, (ed.) Graphics Gems, No 2, Morgan Kaufmann, 1994,
  // p7 and p473.

  var a1, a2, b1, b2, c1, c2;
  var r1, r2, r3, r4;
  var denom, offset, num;
  var x, y;

  // Compute a1, b1, c1, where line joining points 1 and 2 is F(x,y) = a1 x +
  // b1 y + c1 = 0.
  a1 = p2.y - p1.y;
  b1 = p1.x - p2.x;
  c1 = p2.x * p1.y - p1.x * p2.y;

  // Compute r3 and r4.
  r3 = a1 * q1.x + b1 * q1.y + c1;
  r4 = a1 * q2.x + b1 * q2.y + c1;

  // Check signs of r3 and r4. If both point 3 and point 4 lie on
  // same side of line 1, the line segments do not intersect.
  if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
    return /*DONT_INTERSECT*/;
  }

  // Compute a2, b2, c2 where line joining points 3 and 4 is G(x,y) = a2 x + b2 y + c2 = 0
  a2 = q2.y - q1.y;
  b2 = q1.x - q2.x;
  c2 = q2.x * q1.y - q1.x * q2.y;

  // Compute r1 and r2
  r1 = a2 * p1.x + b2 * p1.y + c2;
  r2 = a2 * p2.x + b2 * p2.y + c2;

  // Check signs of r1 and r2. If both point 1 and point 2 lie
  // on same side of second line segment, the line segments do
  // not intersect.
  if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
    return /*DONT_INTERSECT*/;
  }

  // Line segments intersect: compute intersection point.
  denom = a1 * b2 - a2 * b1;
  if (denom === 0) {
    return /*COLLINEAR*/;
  }

  offset = Math.abs(denom / 2);

  // The denom/2 is to get rounding instead of truncating. It
  // is added or subtracted to the numerator, depending upon the
  // sign of the numerator.
  num = b1 * c2 - b2 * c1;
  x = num < 0 ? (num - offset) / denom : (num + offset) / denom;

  num = a2 * c1 - a1 * c2;
  y = num < 0 ? (num - offset) / denom : (num + offset) / denom;

  return { x: x, y: y };
}

function sameSign(r1, r2) {
  return r1 * r2 > 0;
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-polygon.js




/*
 * Returns the point ({x, y}) at which the point argument intersects with the
 * node argument assuming that it has the shape specified by polygon.
 */
function intersectPolygon(node, polyPoints, point) {
  var x1 = node.x;
  var y1 = node.y;

  var intersections = [];

  var minX = Number.POSITIVE_INFINITY;
  var minY = Number.POSITIVE_INFINITY;
  polyPoints.forEach(function (entry) {
    minX = Math.min(minX, entry.x);
    minY = Math.min(minY, entry.y);
  });

  var left = x1 - node.width / 2 - minX;
  var top = y1 - node.height / 2 - minY;

  for (var i = 0; i < polyPoints.length; i++) {
    var p1 = polyPoints[i];
    var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
    var intersect = intersectLine(
      node,
      point,
      { x: left + p1.x, y: top + p1.y },
      { x: left + p2.x, y: top + p2.y }
    );
    if (intersect) {
      intersections.push(intersect);
    }
  }

  if (!intersections.length) {
    console.log('NO INTERSECTION FOUND, RETURN NODE CENTER', node);
    return node;
  }

  if (intersections.length > 1) {
    // More intersections, find the one nearest to edge end point
    intersections.sort(function (p, q) {
      var pdx = p.x - point.x;
      var pdy = p.y - point.y;
      var distp = Math.sqrt(pdx * pdx + pdy * pdy);

      var qdx = q.x - point.x;
      var qdy = q.y - point.y;
      var distq = Math.sqrt(qdx * qdx + qdy * qdy);

      return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
  }
  return intersections[0];
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/intersect/intersect-rect.js


function intersectRect(node, point) {
  var x = node.x;
  var y = node.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = node.width / 2;
  var h = node.height / 2;

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = dy === 0 ? 0 : (h * dx) / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = dx === 0 ? 0 : (w * dy) / dx;
  }

  return { x: x + sx, y: y + sy };
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/shapes.js







var shapes = {
  rect,
  ellipse,
  circle,
  diamond,
};

function setShapes(value) {
  shapes = value;
}

function rect(parent, bbox, node) {
  var shapeSvg = parent
    .insert('rect', ':first-child')
    .attr('rx', node.rx)
    .attr('ry', node.ry)
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('width', bbox.width)
    .attr('height', bbox.height);

  node.intersect = function (point) {
    return intersectRect(node, point);
  };

  return shapeSvg;
}

function ellipse(parent, bbox, node) {
  var rx = bbox.width / 2;
  var ry = bbox.height / 2;
  var shapeSvg = parent
    .insert('ellipse', ':first-child')
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('rx', rx)
    .attr('ry', ry);

  node.intersect = function (point) {
    return intersectEllipse(node, rx, ry, point);
  };

  return shapeSvg;
}

function circle(parent, bbox, node) {
  var r = Math.max(bbox.width, bbox.height) / 2;
  var shapeSvg = parent
    .insert('circle', ':first-child')
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('r', r);

  node.intersect = function (point) {
    return intersectCircle(node, r, point);
  };

  return shapeSvg;
}

// Circumscribe an ellipse for the bounding box with a diamond shape. I derived
// the function to calculate the diamond shape from:
// http://mathforum.org/kb/message.jspa?messageID=3750236
function diamond(parent, bbox, node) {
  var w = (bbox.width * Math.SQRT2) / 2;
  var h = (bbox.height * Math.SQRT2) / 2;
  var points = [
    { x: 0, y: -h },
    { x: -w, y: 0 },
    { x: 0, y: h },
    { x: w, y: 0 },
  ];
  var shapeSvg = parent.insert('polygon', ':first-child').attr(
    'points',
    points
      .map(function (p) {
        return p.x + ',' + p.y;
      })
      .join(' ')
  );

  node.intersect = function (p) {
    return intersectPolygon(node, points, p);
  };

  return shapeSvg;
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/dagre-js/render.js















// This design is based on http://bost.ocks.org/mike/chart/.
function render() {
  var fn = function (svg, g) {
    preProcessGraph(g);

    var outputGroup = createOrSelectGroup(svg, 'output');
    var clustersGroup = createOrSelectGroup(outputGroup, 'clusters');
    var edgePathsGroup = createOrSelectGroup(outputGroup, 'edgePaths');
    var edgeLabels = createEdgeLabels(createOrSelectGroup(outputGroup, 'edgeLabels'), g);
    var nodes = createNodes(createOrSelectGroup(outputGroup, 'nodes'), g, shapes);

    (0,dagre/* layout */.bK)(g);

    positionNodes(nodes, g);
    positionEdgeLabels(edgeLabels, g);
    createEdgePaths(edgePathsGroup, g, arrows);

    var clusters = createClusters(clustersGroup, g);
    positionClusters(clusters, g);

    postProcessGraph(g);
  };

  fn.createNodes = function (value) {
    if (!arguments.length) return createNodes;
    setCreateNodes(value);
    return fn;
  };

  fn.createClusters = function (value) {
    if (!arguments.length) return createClusters;
    setCreateClusters(value);
    return fn;
  };

  fn.createEdgeLabels = function (value) {
    if (!arguments.length) return createEdgeLabels;
    setCreateEdgeLabels(value);
    return fn;
  };

  fn.createEdgePaths = function (value) {
    if (!arguments.length) return createEdgePaths;
    setCreateEdgePaths(value);
    return fn;
  };

  fn.shapes = function (value) {
    if (!arguments.length) return shapes;
    setShapes(value);
    return fn;
  };

  fn.arrows = function (value) {
    if (!arguments.length) return arrows;
    setArrows(value);
    return fn;
  };

  return fn;
}

var NODE_DEFAULT_ATTRS = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: 'rect',
};

var EDGE_DEFAULT_ATTRS = {
  arrowhead: 'normal',
  curve: src/* curveLinear */.c_6,
};

function preProcessGraph(g) {
  g.nodes().forEach(function (v) {
    var node = g.node(v);
    if (!has/* default */.Z(node, 'label') && !g.children(v).length) {
      node.label = v;
    }

    if (has/* default */.Z(node, 'paddingX')) {
      defaults/* default */.Z(node, {
        paddingLeft: node.paddingX,
        paddingRight: node.paddingX,
      });
    }

    if (has/* default */.Z(node, 'paddingY')) {
      defaults/* default */.Z(node, {
        paddingTop: node.paddingY,
        paddingBottom: node.paddingY,
      });
    }

    if (has/* default */.Z(node, 'padding')) {
      defaults/* default */.Z(node, {
        paddingLeft: node.padding,
        paddingRight: node.padding,
        paddingTop: node.padding,
        paddingBottom: node.padding,
      });
    }

    defaults/* default */.Z(node, NODE_DEFAULT_ATTRS);

    forEach/* default */.Z(['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'], function (k) {
      node[k] = Number(node[k]);
    });

    // Save dimensions for restore during post-processing
    if (has/* default */.Z(node, 'width')) {
      node._prevWidth = node.width;
    }
    if (has/* default */.Z(node, 'height')) {
      node._prevHeight = node.height;
    }
  });

  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    if (!has/* default */.Z(edge, 'label')) {
      edge.label = '';
    }
    defaults/* default */.Z(edge, EDGE_DEFAULT_ATTRS);
  });
}

function postProcessGraph(g) {
  forEach/* default */.Z(g.nodes(), function (v) {
    var node = g.node(v);

    // Restore original dimensions
    if (has/* default */.Z(node, '_prevWidth')) {
      node.width = node._prevWidth;
    } else {
      delete node.width;
    }

    if (has/* default */.Z(node, '_prevHeight')) {
      node.height = node._prevHeight;
    } else {
      delete node.height;
    }

    delete node._prevWidth;
    delete node._prevHeight;
  });
}

function createOrSelectGroup(root, name) {
  var selection = root.select('g.' + name);
  if (selection.empty()) {
    selection = root.append('g').attr('class', name);
  }
  return selection;
}

;// CONCATENATED MODULE: ./node_modules/dagre-d3-es/src/index.js







// EXTERNAL MODULE: ./node_modules/mermaid/dist/styles-b966c4ae.js + 1 modules
var styles_b966c4ae = __webpack_require__(30445);
// EXTERNAL MODULE: ./node_modules/ts-dedent/dist/index.js
var dist = __webpack_require__(62059);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(43598);
// EXTERNAL MODULE: ./node_modules/@braintree/sanitize-url/dist/index.js
var sanitize_url_dist = __webpack_require__(5123);
// EXTERNAL MODULE: ./node_modules/dompurify/dist/purify.cjs.js
var purify_cjs = __webpack_require__(62841);
// EXTERNAL MODULE: ./node_modules/dagre-d3-es/src/graphlib/json.js + 1 modules
var json = __webpack_require__(53893);
;// CONCATENATED MODULE: ./node_modules/mermaid/dist/flowDiagram-61eb444c.js

























function question(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const s = (w + h) * 0.9;
  const points = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, s, s, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function hexagon(parent, bbox, node) {
  const f = 4;
  const h = bbox.height;
  const m = h / f;
  const w = bbox.width + 2 * m;
  const points = [
    { x: m, y: 0 },
    { x: w - m, y: 0 },
    { x: w, y: -h / 2 },
    { x: w - m, y: -h },
    { x: m, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function rect_left_inv_arrow(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -h / 2, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: -h / 2, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function lean_right(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function lean_left(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 2 * h / 6, y: 0 },
    { x: w + h / 6, y: 0 },
    { x: w - 2 * h / 6, y: -h },
    { x: -h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function trapezoid(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w + 2 * h / 6, y: 0 },
    { x: w - h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function inv_trapezoid(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: -2 * h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function rect_right_inv_arrow(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 0, y: 0 },
    { x: w + h / 2, y: 0 },
    { x: w, y: -h / 2 },
    { x: w + h / 2, y: -h },
    { x: 0, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function stadium(parent, bbox, node) {
  const h = bbox.height;
  const w = bbox.width + h / 4;
  const shapeSvg = parent.insert("rect", ":first-child").attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
  node.intersect = function(point) {
    return intersectRect(node, point);
  };
  return shapeSvg;
}
function subroutine(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 0, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: 0, y: -h },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: w + 8, y: 0 },
    { x: w + 8, y: -h },
    { x: -8, y: -h },
    { x: -8, y: 0 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return intersectPolygon(node, points, point);
  };
  return shapeSvg;
}
function cylinder(parent, bbox, node) {
  const w = bbox.width;
  const rx = w / 2;
  const ry = rx / (2.5 + w / 50);
  const h = bbox.height + ry;
  const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
  const shapeSvg = parent.attr("label-offset-y", ry).insert("path", ":first-child").attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
  node.intersect = function(point) {
    const pos = intersectRect(node, point);
    const x = pos.x - node.x;
    if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
      let y = ry * ry * (1 - x * x / (rx * rx));
      if (y != 0) {
        y = Math.sqrt(y);
      }
      y = ry - y;
      if (point.y - node.y > 0) {
        y = -y;
      }
      pos.y += y;
    }
    return pos;
  };
  return shapeSvg;
}
function addToRender(render2) {
  render2.shapes().question = question;
  render2.shapes().hexagon = hexagon;
  render2.shapes().stadium = stadium;
  render2.shapes().subroutine = subroutine;
  render2.shapes().cylinder = cylinder;
  render2.shapes().rect_left_inv_arrow = rect_left_inv_arrow;
  render2.shapes().lean_right = lean_right;
  render2.shapes().lean_left = lean_left;
  render2.shapes().trapezoid = trapezoid;
  render2.shapes().inv_trapezoid = inv_trapezoid;
  render2.shapes().rect_right_inv_arrow = rect_right_inv_arrow;
}
function addToRenderV2(addShape) {
  addShape({ question });
  addShape({ hexagon });
  addShape({ stadium });
  addShape({ subroutine });
  addShape({ cylinder });
  addShape({ rect_left_inv_arrow });
  addShape({ lean_right });
  addShape({ lean_left });
  addShape({ trapezoid });
  addShape({ inv_trapezoid });
  addShape({ rect_right_inv_arrow });
}
function insertPolygonShape(parent, w, h, points) {
  return parent.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  ).attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
const flowChartShapes = {
  addToRender,
  addToRenderV2
};
const conf = {};
const setConf = function(cnf) {
  const keys = Object.keys(cnf);
  for (const key of keys) {
    conf[key] = cnf[key];
  }
};
const addVertices = function(vert, g, svgId, root, _doc, diagObj) {
  const svg = !root ? (0,src/* select */.Ys)(`[id="${svgId}"]`) : root.select(`[id="${svgId}"]`);
  const doc = !_doc ? document : _doc;
  const keys = Object.keys(vert);
  keys.forEach(function(id) {
    const vertex = vert[id];
    let classStr = "default";
    if (vertex.classes.length > 0) {
      classStr = vertex.classes.join(" ");
    }
    const styles = (0,mermaid_934d9bea.k)(vertex.styles);
    let vertexText = vertex.text !== void 0 ? vertex.text : vertex.id;
    let vertexNode;
    if ((0,mermaid_934d9bea.m)((0,mermaid_934d9bea.c)().flowchart.htmlLabels)) {
      const node = {
        label: vertexText.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (s) => `<i class='${s.replace(":", " ")}'></i>`
        )
      };
      vertexNode = (0,add_html_label/* addHtmlLabel */.a)(svg, node).node();
      vertexNode.parentNode.removeChild(vertexNode);
    } else {
      const svgLabel = doc.createElementNS("http://www.w3.org/2000/svg", "text");
      svgLabel.setAttribute("style", styles.labelStyle.replace("color:", "fill:"));
      const rows = vertexText.split(mermaid_934d9bea.e.lineBreakRegex);
      for (const row of rows) {
        const tspan = doc.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        tspan.setAttribute("dy", "1em");
        tspan.setAttribute("x", "1");
        tspan.textContent = row;
        svgLabel.appendChild(tspan);
      }
      vertexNode = svgLabel;
    }
    let radious = 0;
    let _shape = "";
    switch (vertex.type) {
      case "round":
        radious = 5;
        _shape = "rect";
        break;
      case "square":
        _shape = "rect";
        break;
      case "diamond":
        _shape = "question";
        break;
      case "hexagon":
        _shape = "hexagon";
        break;
      case "odd":
        _shape = "rect_left_inv_arrow";
        break;
      case "lean_right":
        _shape = "lean_right";
        break;
      case "lean_left":
        _shape = "lean_left";
        break;
      case "trapezoid":
        _shape = "trapezoid";
        break;
      case "inv_trapezoid":
        _shape = "inv_trapezoid";
        break;
      case "odd_right":
        _shape = "rect_left_inv_arrow";
        break;
      case "circle":
        _shape = "circle";
        break;
      case "ellipse":
        _shape = "ellipse";
        break;
      case "stadium":
        _shape = "stadium";
        break;
      case "subroutine":
        _shape = "subroutine";
        break;
      case "cylinder":
        _shape = "cylinder";
        break;
      case "group":
        _shape = "rect";
        break;
      default:
        _shape = "rect";
    }
    mermaid_934d9bea.l.warn("Adding node", vertex.id, vertex.domId);
    g.setNode(diagObj.db.lookUpDomId(vertex.id), {
      labelType: "svg",
      labelStyle: styles.labelStyle,
      shape: _shape,
      label: vertexNode,
      rx: radious,
      ry: radious,
      class: classStr,
      style: styles.style,
      id: diagObj.db.lookUpDomId(vertex.id)
    });
  });
};
const addEdges = function(edges, g, diagObj) {
  let cnt = 0;
  let defaultStyle;
  let defaultLabelStyle;
  if (edges.defaultStyle !== void 0) {
    const defaultStyles = (0,mermaid_934d9bea.k)(edges.defaultStyle);
    defaultStyle = defaultStyles.style;
    defaultLabelStyle = defaultStyles.labelStyle;
  }
  edges.forEach(function(edge) {
    cnt++;
    const linkId = "L-" + edge.start + "-" + edge.end;
    const linkNameStart = "LS-" + edge.start;
    const linkNameEnd = "LE-" + edge.end;
    const edgeData = {};
    if (edge.type === "arrow_open") {
      edgeData.arrowhead = "none";
    } else {
      edgeData.arrowhead = "normal";
    }
    let style = "";
    let labelStyle = "";
    if (edge.style !== void 0) {
      const styles = (0,mermaid_934d9bea.k)(edge.style);
      style = styles.style;
      labelStyle = styles.labelStyle;
    } else {
      switch (edge.stroke) {
        case "normal":
          style = "fill:none";
          if (defaultStyle !== void 0) {
            style = defaultStyle;
          }
          if (defaultLabelStyle !== void 0) {
            labelStyle = defaultLabelStyle;
          }
          break;
        case "dotted":
          style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
          break;
        case "thick":
          style = " stroke-width: 3.5px;fill:none";
          break;
      }
    }
    edgeData.style = style;
    edgeData.labelStyle = labelStyle;
    if (edge.interpolate !== void 0) {
      edgeData.curve = (0,mermaid_934d9bea.n)(edge.interpolate, src/* curveLinear */.c_6);
    } else if (edges.defaultInterpolate !== void 0) {
      edgeData.curve = (0,mermaid_934d9bea.n)(edges.defaultInterpolate, src/* curveLinear */.c_6);
    } else {
      edgeData.curve = (0,mermaid_934d9bea.n)(conf.curve, src/* curveLinear */.c_6);
    }
    if (edge.text === void 0) {
      if (edge.style !== void 0) {
        edgeData.arrowheadStyle = "fill: #333";
      }
    } else {
      edgeData.arrowheadStyle = "fill: #333";
      edgeData.labelpos = "c";
      if ((0,mermaid_934d9bea.m)((0,mermaid_934d9bea.c)().flowchart.htmlLabels)) {
        edgeData.labelType = "html";
        edgeData.label = `<span id="L-${linkId}" class="edgeLabel L-${linkNameStart}' L-${linkNameEnd}" style="${edgeData.labelStyle}">${edge.text.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (s) => `<i class='${s.replace(":", " ")}'></i>`
        )}</span>`;
      } else {
        edgeData.labelType = "text";
        edgeData.label = edge.text.replace(mermaid_934d9bea.e.lineBreakRegex, "\n");
        if (edge.style === void 0) {
          edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none";
        }
        edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
      }
    }
    edgeData.id = linkId;
    edgeData.class = linkNameStart + " " + linkNameEnd;
    edgeData.minlen = edge.length || 1;
    g.setEdge(diagObj.db.lookUpDomId(edge.start), diagObj.db.lookUpDomId(edge.end), edgeData, cnt);
  });
};
const getClasses = function(text, diagObj) {
  mermaid_934d9bea.l.info("Extracting classes");
  return diagObj.db.getClasses();
};
const draw = function(text, id, _version, diagObj) {
  mermaid_934d9bea.l.info("Drawing flowchart");
  const { securityLevel, flowchart: conf2 } = (0,mermaid_934d9bea.c)();
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = (0,src/* select */.Ys)("#i" + id);
  }
  const root = securityLevel === "sandbox" ? (0,src/* select */.Ys)(sandboxElement.nodes()[0].contentDocument.body) : (0,src/* select */.Ys)("body");
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  let dir = diagObj.db.getDirection();
  if (dir === void 0) {
    dir = "TD";
  }
  const nodeSpacing = conf2.nodeSpacing || 50;
  const rankSpacing = conf2.rankSpacing || 50;
  const g = new graphlib/* Graph */.k({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: dir,
    nodesep: nodeSpacing,
    ranksep: rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let subG;
  const subGraphs = diagObj.db.getSubGraphs();
  for (let i2 = subGraphs.length - 1; i2 >= 0; i2--) {
    subG = subGraphs[i2];
    diagObj.db.addVertex(subG.id, subG.title, "group", void 0, subG.classes);
  }
  const vert = diagObj.db.getVertices();
  mermaid_934d9bea.l.warn("Get vertices", vert);
  const edges = diagObj.db.getEdges();
  let i = 0;
  for (i = subGraphs.length - 1; i >= 0; i--) {
    subG = subGraphs[i];
    (0,src/* selectAll */.td_)("cluster").append("text");
    for (let j = 0; j < subG.nodes.length; j++) {
      mermaid_934d9bea.l.warn(
        "Setting subgraph",
        subG.nodes[j],
        diagObj.db.lookUpDomId(subG.nodes[j]),
        diagObj.db.lookUpDomId(subG.id)
      );
      g.setParent(diagObj.db.lookUpDomId(subG.nodes[j]), diagObj.db.lookUpDomId(subG.id));
    }
  }
  addVertices(vert, g, id, root, doc, diagObj);
  addEdges(edges, g, diagObj);
  const render$1 = new render();
  flowChartShapes.addToRender(render$1);
  render$1.arrows().none = function normal(parent, id2, edge, type) {
    const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    const path = marker.append("path").attr("d", "M 0 0 L 0 0 L 0 0 z");
    (0,util/* applyStyle */.bg)(path, edge[type + "Style"]);
  };
  render$1.arrows().normal = function normal(parent, id2) {
    const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowheadPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  };
  const svg = root.select(`[id="${id}"]`);
  const element = root.select("#" + id + " g");
  render$1(element, g);
  element.selectAll("g.node").attr("title", function() {
    return diagObj.db.getTooltip(this.id);
  });
  diagObj.db.indexNodes("subGraph" + i);
  for (i = 0; i < subGraphs.length; i++) {
    subG = subGraphs[i];
    if (subG.title !== "undefined") {
      const clusterRects = doc.querySelectorAll(
        "#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"] rect'
      );
      const clusterEl = doc.querySelectorAll(
        "#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"]'
      );
      const xPos = clusterRects[0].x.baseVal.value;
      const yPos = clusterRects[0].y.baseVal.value;
      const _width = clusterRects[0].width.baseVal.value;
      const cluster = (0,src/* select */.Ys)(clusterEl[0]);
      const te = cluster.select(".label");
      te.attr("transform", `translate(${xPos + _width / 2}, ${yPos + 14})`);
      te.attr("id", id + "Text");
      for (let j = 0; j < subG.classes.length; j++) {
        clusterEl[0].classList.add(subG.classes[j]);
      }
    }
  }
  if (!conf2.htmlLabels) {
    const labels = doc.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
    for (const label of labels) {
      const dim = label.getBBox();
      const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("rx", 0);
      rect.setAttribute("ry", 0);
      rect.setAttribute("width", dim.width);
      rect.setAttribute("height", dim.height);
      label.insertBefore(rect, label.firstChild);
    }
  }
  (0,mermaid_934d9bea.o)(g, svg, conf2.diagramPadding, conf2.useMaxWidth);
  const keys = Object.keys(vert);
  keys.forEach(function(key) {
    const vertex = vert[key];
    if (vertex.link) {
      const node = root.select("#" + id + ' [id="' + diagObj.db.lookUpDomId(key) + '"]');
      if (node) {
        const link = doc.createElementNS("http://www.w3.org/2000/svg", "a");
        link.setAttributeNS("http://www.w3.org/2000/svg", "class", vertex.classes.join(" "));
        link.setAttributeNS("http://www.w3.org/2000/svg", "href", vertex.link);
        link.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
        if (securityLevel === "sandbox") {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
        } else if (vertex.linkTarget) {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", vertex.linkTarget);
        }
        const linkNode = node.insert(function() {
          return link;
        }, ":first-child");
        const shape = node.select(".label-container");
        if (shape) {
          linkNode.append(function() {
            return shape.node();
          });
        }
        const label = node.select(".label");
        if (label) {
          linkNode.append(function() {
            return label.node();
          });
        }
      }
    }
  });
};
const flowRenderer = {
  setConf,
  addVertices,
  addEdges,
  getClasses,
  draw
};
const diagram = {
  parser: flowDb_170db09d.p,
  db: flowDb_170db09d.f,
  renderer: styles_b966c4ae.f,
  styles: styles_b966c4ae.a,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    flowRenderer.setConf(cnf.flowchart);
    flowDb_170db09d.f.clear();
    flowDb_170db09d.f.setGen("gen-1");
  }
};



/***/ })

};
;