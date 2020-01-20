import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CollectionOverview  from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollection } from '../../redux/shop/shop.actions'
class ShopPage extends React.Component {
        unsubscribeFromSnapShot = null;

        componentDidMount() {
          const { updateCollections } = this.props
          const collectionRef = firestore.collection('collections')

           this.unsubscribeFromSnapShot = collectionRef.onSnapshot( async snapshot => {
           const collectionsmap =  convertCollectionsSnapshotToMap(snapshot)
           updateCollections(collectionsmap)
           
          })
        }
       render() {
         const { match } = this.props
        return (
          <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} /> 
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
          </div>
      )  
       }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollection(collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage);