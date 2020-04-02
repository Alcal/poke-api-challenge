import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const PokedexEntry = ({id=-1, name='Missingno', genus='???', sprite='', description='???? ???? ????'}) => {
    return (
    <Card style={{
      maxWidth: 345,
    }}>
      <CardHeader 
        title={`#${id} ${name}`}
        subheader={genus}
      />
      <CardMedia
        style={{
          height: 0,
          paddingTop: '100%'
        }}
        image={sprite}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>)
}