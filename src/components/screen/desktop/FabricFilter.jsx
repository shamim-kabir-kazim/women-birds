import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FabricFilter = ({ activeFilter, toggleFilter }) => (
  <div className="filter-item">
    <div className="filter-title" onClick={() => toggleFilter('fabric')}>
      FABRIC
      <span className="icon">{activeFilter === 'fabric' ? <FaChevronUp /> : <FaChevronDown />}</span>
    </div>
    {activeFilter === 'fabric' && (
      <div className="filter-submenu">
<ul>
  <li>Pure Silk</li>
  <li>Georgette</li>
  <li>Net</li>
  <li>Chiffon</li>
  <li>Velvet</li>
  <li>Lawn Cotton</li>
  <li>Raw Silk</li>
  <li>Art Silk</li>
  <li>Organza</li>
  <li>Rayon</li>
  <li>Crepe</li>
  <li>Muslin</li>
  <li>Cotton</li>
  <li>Tissue Silk</li>
  <li>Brocade</li>
</ul>

      </div>
    )}
  </div>
);

export default FabricFilter;